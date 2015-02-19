import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			transactions: this.store.find("transaction"),
			cookies: this.store.find("cookie"),
			girls: this.store.find("girl")
		});
	},
	setupController: function(controller, models){
		controller.set("transactions", models.transactions);
		controller.set("cookies", models.cookies);
		controller.set("girls", models.girls);
	}
});
