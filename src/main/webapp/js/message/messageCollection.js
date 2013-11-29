Chat.module("Message", function(Message, Chat, Backbone, Marionette, $, _){
	Message.MessageCollection = Backbone.Firebase.Collection.extend({
		model: Message.Message,
		firebase: "https://pacey-chat.firebaseio.com"
	});
});