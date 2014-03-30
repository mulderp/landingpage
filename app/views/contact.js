var Backbone = require("backbone");
var Contact = require("models/contact");
var $ = Backbone.$;

var ContactView = Backbone.View.extend({

  events: {
    "submit": "addContact"
  },

  addContact: function(ev) {
    ev.preventDefault();
    var name = $("input[name='email']");
    console.log(name);
    this.collection.add({email: name.val()});
    console.log(this.collection.toJSON());
    this.renderThanks();
  },

  renderThanks: function() {
    this.$el.html("thanks");

  },

  initialize: function() {
    this.listenTo(this.collection, "all", function(ev) {
      console.log(ev);

    });

  }



});


module.exports = ContactView;
