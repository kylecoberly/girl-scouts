import DS from 'ember-data';

var CookieStock = DS.Model.extend({
	cookie: DS.belongsTo("cookie", {async: true}),
	quantity: DS.attr("number")
});

CookieStock.reopenClass({
	FIXTURES: [
		{
			id: 1,
			cookie: 1,
			quantity: 100

		},{
			id: 2,
			cookie: 2,
			quantity: 100
		},{
			id: 3,
			cookie: 3,
			quantity: 100
		},{
			id: 4,
			cookie: 4,
			quantity: 100
		},{
			id: 5,
			cookie: 5,
			quantity: 100
		},{
			id: 6,
			cookie: 6,
			quantity: 100
		},{
			id: 7,
			cookie: 7,
			quantity: 100
		},{
			id: 8,
			cookie: 8,
			quantity: 100
		},{
			id: 9,
			cookie: 9,
			quantity: 100
		},{
			id: 10,
			cookie: 10,
			quantity: 100
		},{
			id: 11,
			cookie: 11,
			quantity: 100
		},{
			id: 12,
			cookie: 12,
			quantity: 100
		}
	]
});

export default CookieStock;