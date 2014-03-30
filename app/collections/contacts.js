var backfire = require("client-backfire");
var Backbone = backfire.Backbone;

var Contacts = Backbone.Firebase.Collection.extend({
  firebase: "https://mulpat.firebaseio.com/contacts"
});

var contacts = new Contacts();

module.exports = contacts
