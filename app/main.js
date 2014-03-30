var $ = require("jquery-untouched");
var Backbone = require("backbone");
Backbone.$ = $;

var Contact = require("models/contact");
var contacts = require("collections/contacts");
var contact = new Contact();
var ContactForm = require("views/contact");

$(document).ready(function() {

  view = new ContactForm({el: $("#contact"), collection: contacts });

});
