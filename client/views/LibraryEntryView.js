// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // Controller code
  events: {
    'click': 'enqueue'
  },

  enqueue: function() {
    console.log("clicked to lib entry");
    this.model.enqueue();
    dispatcher.trigger('enqueue', this.model.attributes);
  },

  // View code
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
