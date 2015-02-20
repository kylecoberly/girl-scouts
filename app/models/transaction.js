import DS from 'ember-data';

var Transaction = DS.Model.extend({
	date: DS.attr("date"),
	moneyGiven: DS.attr("number"),
	girl: DS.belongsTo("girl", {async: true}),
	cookieTransactions: DS.hasMany("cookieTransaction", {async: true}),
	formattedDate: function(){
		var timestamp = this.get("date");
		timestamp = new Date(timestamp);
		return timestamp.getMonth() + "/" + timestamp.getDate() + "/" + timestamp.getFullYear() + ", " + timestamp.getHours() + ":" + timestamp.getMinutes();
	}.property("date")
});

Transaction.reopenClass({
	FIXTURES: [
	]
});

export default Transaction;