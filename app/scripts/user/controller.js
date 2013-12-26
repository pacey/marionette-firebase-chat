"use strict";
Chat.module("User", function (User, Chat, Backbone, Marionette, $, _) {
	User.Controller = Marionette.Controller.extend({
		initialize: function () {
			if (localStorage.getItem("user")) {
				this.user = new User.User(JSON.parse(localStorage.getItem("user")));
			}
			else {
				this.user = new User.User();
				localStorage.setItem("user", JSON.stringify(this.user));
			}
			this.listenTo(this.user, "change", function () {
				localStorage.setItem("user", JSON.stringify(this.user));
			});

			new User.View({
				model: this.user
			}).render();
			Chat.reqres.setHandlers({
				"getUser": {
					callback: function () {
						return this.user;
					},
					context: this
				}
			});
		}
	});
	User.addInitializer(function () {
		new User.Controller();
	});
});