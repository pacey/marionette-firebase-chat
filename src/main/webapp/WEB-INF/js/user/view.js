Chat.module("User", function(User, Chat, Backbone, Marionette, $, _){
	User.View = Marionette.ItemView.extend({
		el: "#userForm",
		template: Handlebars.compile($("#userTemplate").html()),
		model: User.User,
		events: {
			"submit": "updateUser"
		},
		ui: {
			usernameInput: "input[type=text]"
		},
		initialize: function(){
			this.bindUIElements();
		},
		updateUser: function(event){
			event.preventDefault();
			this.model.set("name", this.ui.usernameInput.val());
		}
	});
});