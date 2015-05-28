// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  //el: '<audio controls autoplay />',

  initialize: function() {
    this.render();
    dispatcher.bind('playSong', this.setSong, this);
  },

  template: _.template('<audio id="myplayer" controls autoplay/>'),

  inplayer: function(){
    console.log("catched in player!");
  },

  events: {
    'ended' : 'songEnded'
  },

  songEnded: function(){
    console.log("SONG ENDED!");
  },

  setSong: function(song){
    console.log("changing song!");
    this.model = song;
    this.render(song);
  },

  render: function(){
    this.$el.html(this.template());
    this.$el.find('audio').attr('src', this.model ? this.model.get('url') : '');
    this.$el.append("<h4>Currently playing:</h4>");
    if(arguments.length > 0){
     this.$el.append(new SongQueueEntryView({model: arguments[0]}).render());
    }
    // var insert = $('p');
    // insert.text = "Currently playing";
    // this.$el.append(insert);
    // console.log(this.$el);
    return this.$el;
  }

});
