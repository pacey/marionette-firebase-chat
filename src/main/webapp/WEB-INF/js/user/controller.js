Chat.module("User", function(User, Chat, Backbone, Marionette, $, _){
	User.Controller = Marionette.Controller.extend({
		initialize: function(){
			this.userNames = [
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
			];
			this.user = new User.User({
				name: _.sample(this.userNames)
			});
			new User.View({
				model: this.user
			}).render();
			Chat.reqres.setHandlers({
				"getUser": {
					callback: function(){
						return this.user;
					},
					context: this
				}
			});
		}
	});
	User.addInitializer(function(){
		new User.Controller();
	});
});