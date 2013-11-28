Chat.module("Message", function(Message, Chat, Backbone, Marionette, $, _){
	Message.MessageCollectionView = Marionette.CollectionView.extend({
		el: "#messageList",
		itemView: Message.MessageView,
		onAfterItemAdded: function(){
			this.$el.parent("#messageListWrapper").stop().animate({
				scrollTop: this.$el.height()
			}, "slow");
		}
	});
});