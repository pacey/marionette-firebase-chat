"use strict";
Chat.module("Message", function (Message, Chat, Backbone) {
	Message.MessageCollection = Backbone.Firebase.Collection.extend({
		model: Message.Message,
		firebase: "https://pacey-chat.firebaseio.com"
	});
});