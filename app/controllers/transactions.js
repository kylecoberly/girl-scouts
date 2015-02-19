import Ember from 'ember';

export default Ember.Controller.extend({
	moneyGiven: null,
	currentGirl: function(){
		var currentGirl;
		var controller = this;
		this.get("girls").forEach(function(item){
			if (item.id === controller.get("currentGirlId")){
				currentGirl = item;
			}
		});
		return currentGirl;
	}.property("currentGirlId"),
	reverseSortedTransactions: function(){
		return this.get("transactions").toArray().reverse();
	}.property("transactions.@each"),
	buildTransaction: function(){
		var controller = this;
		var transaction = this.store.createRecord("transaction");
		transaction.set("date", new Date());
		if (this.get("currentGirl")){
			transaction.set("girl", this.get("currentGirl"));
		}
		if (this.get("moneyGiven")){
			transaction.set("moneyGiven", this.get("moneyGiven"));
		}
		this.get("cookies").forEach(function(cookie){
			var slug = cookie.get("slug");
			var row = Ember.$("table tr.cookie[data-cookie='" + slug +"']");
			var sold = row.find(" > td[data-transaction-type=sold] > input").val();
			var returned = row.find(" > td[data-transaction-type=returned] > input").val();
			var given = row.find(" > td[data-transaction-type=given] > input").val();
			if (sold || returned || given){
				var cookieTransaction = controller.store.createRecord("cookieTransaction");
				cookieTransaction.set("cookie", cookie);

				if (sold){
					cookieTransaction.set("sold", sold);
				}
				if (returned){
					cookieTransaction.set("returned", returned);
				}
				if (given){
					cookieTransaction.set("given", given);
				}
				cookieTransaction.save();
				transaction.get("cookieTransactions").addObject(cookieTransaction);
			}
		});
		return transaction;
	},
	resetForm: function(){
		Ember.$("form")[0].reset();
	},
	actions: {
		removeTransaction: function(transaction){
			transaction.destroyRecord();
		},
		addTransaction: function(){
			var transaction = this.buildTransaction();
			transaction.save();
			this.resetForm();
		}
	}
});
