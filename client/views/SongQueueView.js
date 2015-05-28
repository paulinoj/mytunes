// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // Controller
  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    dispatcher.bind("enqueue", this.addSong, this);
    this.collection.on("add", this.playSong, this);
    this.collection.on("remove", this.playSong, this);
  },

  addSong: function(){
    console.log("adding song to the queue");
    this.collection.add(new SongModel(arguments[0]));
    console.log('added to the collection: ', this.collection);
  },

  playSong: function(){
    console.log("playing song...");
      this.collection.first().play();
  },

  playSongOnAdd: function(){
    console.log("playing song...");
    if(this.collection.length === 1){
      this.collection.first().play();
    }
  },

  // View

  template: _.template('<div id="songQueue"><h4>Song Queue</h4></div>'),

  render: function() {
    this.$el.html(this.template());

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        console.info(song);
        return new SongQueueEntryView({model: song}).render();
      })
    );



    return this.$el;
  }

});
