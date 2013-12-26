"use strict";
Chat.module("Message", function (Message, Chat, Backbone, Marionette) {
	Message.AddMessageView = Marionette.ItemView.extend({
		el: "#addMessage",
		ui: {
			messageInput: "input[type=text]"
		},
		events: {
			"submit": "addMessage"
		},
		initialize: function () {
			this.bindUIElements();
			this.ui.messageInput.focus();
		},
		addMessage: function () {
			event.preventDefault();
			this.trigger("addMessage", new Message.Message({
				text: this.ui.messageInput.val(),
				createDate: new Date().getTime()
			}));
			this.ui.messageInput.val("").focus();
		}
	});
});