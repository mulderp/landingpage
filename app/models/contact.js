var Backbone = require("backbone");
var backfire = require("client-backfire");

var Contact = Backbone.Model.extend({

  firebase: "https://mulpat.firebaseio.com/contacts",

  defaults: {
    name: "",
    email: ""
  }

});


module.exports = Contact;
