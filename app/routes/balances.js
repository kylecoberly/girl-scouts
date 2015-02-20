import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			troop: this.store.find("troop", 1),
			transactions: this.store.find("transaction"),
			cookies: this.store.find("cookie"),
			girls: this.store.find("girl"),
			cookieStocks: this.store.find("cookieStock")
		});
	},
	setupController: function(controller, models){
		controller.set("troop", models.troop);
		controller.set("transactions", models.transactions);
		controller.set("cookies", models.cookies);
		controller.set("girls", models.girls);
		controller.set("cookieStocks", models.cookieStocks);
	}
});
