"use strict";
Chat.module("User", function (User, Chat, Backbone, Marionette, $, _) {
	User.User = Backbone.Model.extend({
		defaults: {
			name: _.sample([
				"Walter White",
				"Skyler White",
				"Jesse Pinkman",
				"Hank Schrader",
				"Marie Schrader",
				"Walter White, Jr.",
				"Saul Goodman",
				"Gustavo Fring",
				"Mike Ehrmantraut",
				"Todd Alquist",
				"Lydia Rodarte-Quayle"
			])
		}
	});
});