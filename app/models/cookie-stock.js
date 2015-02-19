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
			quantity: 2

		},{
			id: 2,
			cookie: 2,
			quantity: 2
		},{
			id: 3,
			cookie: 3,
			quantity: 1
		}
	]
});

export default CookieStock;