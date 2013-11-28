Chat.module("Message", function(Message, Chat, Backbone, Marionette, $, _){
	Message.MessageCollectionView = Marionette.CollectionView.extend({
		el: "#messageList",
		itemView: Message.MessageView,
		onAfterItemAdded: function(viewInstance){
			this.$el.stop().animate({
				scrollTop: viewInstance.$el.offset().top
			});
		}
	});
});