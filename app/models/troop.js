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
			cookieStocks: [1,2,3,4,5,6,7,8,9,10,11,12]
		}
	]
});

export default Troop;