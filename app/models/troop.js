import DS from 'ember-data';

var Troop = DS.Model.extend({
	slug: DS.attr("string"),
	name: DS.attr("string"),
	amountOwed: DS.attr("number"),
	cookieStocks: DS.hasMany("cookieStock", {async: true}),
	girls: DS.hasMany("girl", {async: true})
});

Troop.reopenClass({
	FIXTURES: [
		{
			id: 1,
			slug: "troop",
			name: "Troop",
			cookieStocks: [1,2]
		}
	]
});

export default Troop;