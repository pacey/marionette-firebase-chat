"use strict";
Chat.module("Message", function (Message, Chat, Backbone, Marionette, $) {
	Message.MessageView = Marionette.ItemView.extend({
		tagName: "li",
		className: "list-group-item",
		template: Handlebars.compile($("#messageTemplate").html())
	});
});