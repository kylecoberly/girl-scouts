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
		{
			id: 1,
			date: 1424327741000,
			moneyGiven: 17.01,
			girl: 3,
			cookieTransactions: [1,2]
		},{
			id: 2,
			date: 1424328741000,
			girl: 2,
			cookieTransactions: [3]
		}
	]
});

export default Transaction;