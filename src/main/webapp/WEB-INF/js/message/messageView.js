Chat.module("Message", function(Message, Chat, Backbone, Marionette, $, _){
	Message.MessageView = Marionette.ItemView.extend({
		tagName: "li",
		className: "list-group-item",
		template: Handlebars.compile($("#messageTemplate").html())
	});
});