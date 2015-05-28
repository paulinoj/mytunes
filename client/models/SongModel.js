// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    isInQueue: false
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.info("playSong triggered");
    dispatcher.trigger('playSong', this);
  },

  enqueue: function() {
    //console.log("changeing attr in model");
    this.set('isInQueue', true);
  }

});
