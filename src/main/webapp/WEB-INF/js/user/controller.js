Chat.module("User", function(User, Chat, Backbone, Marionette, $, _){
	User.Controller = Marionette.Controller.extend({
		initialize: function(){
			if(localStorage.getItem("user")){
				this.user = new User.User(JSON.parse(localStorage.getItem("user")));
			}
			else{
				this.user = new User.User({
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
				});
				localStorage.setItem("user", JSON.stringify(this.user));
			}
			this.listenTo(this.user, "change", function(){
				localStorage.setItem("user", JSON.stringify(this.user));
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