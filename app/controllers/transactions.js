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
	updateInventory: function(actor, cookie, amount){
		var foundCookieStock = null;
		actor.get("cookieStocks").forEach(function(cookieStock){
			if (cookieStock.get("cookie.name") === cookie.get("name")){
				cookieStock.set("quantity", (cookieStock.get("quantity") + amount));
				foundCookieStock = cookieStock;
			}
		});
		if (!cookieStockFound){
			var cookieStock = this.store.createRecord("cookieStock");
			cookieStock.set("cookie", cookie);
			cookieStock.set("quantity", amount);
			return cookieStock.save().then(function(){
				return actor.get("cookieStocks").addObject(cookieStock);
			});
		} else {
			return foundCookieStock.save();
		}
	},
	updateGirlDebt: function(girl, amount){
		girl.set("amountOwed", girl.get("amountOwed") - amount);
		return girl.save();
	},
	resetForm: function(){
		Ember.$("form")[0].reset();
	},
	actions: {
		removeTransaction: function(transaction){
			transaction.destroyRecord();
			/* Inverse of addTransaction stuff */
		},
		addTransaction: function(){
			var controller = this;
			var transaction = this.buildTransaction();
			
			transaction.get("cookieTransactions").forEach(function(cookieTransaction){
				if (cookieTransaction.get("sold") > 0){
					controller.updateInventory(transaction.get("girl"), cookieTransaction.get("cookie"), (cookieTransaction.get("sold") * -1));
				}
				if (cookieTransaction.get("returned") > 0){
					controller.updateInventory(transaction.get("girl"), cookieTransaction.get("cookie"), (cookieTransaction.get("returned") * -1));
					controller.updateInventory(controller.get("troop"), cookieTransaction.get("cookie"), cookieTransaction.get("returned"));
				}
				if (cookieTransaction.get("given") > 0){
					controller.updateInventory(controller.get("troop"), cookieTransaction.get("cookie"), (cookieTransaction.get("given") * -1));
					controller.updateInventory(transaction.get("girl"), cookieTransaction.get("cookie"), cookieTransaction.get("given"));
				}
				var dollarValue = cookieTransaction.dollarValue();
				if (dollarValue !== 0){
					controller.updateGirlDebt(transaction.get("girl"), dollarValue);
				} 
			});

			transaction.save();
			this.resetForm();
		}
	}
});
