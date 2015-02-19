import DS from 'ember-data';

var CookieTransaction = DS.Model.extend({
	cookie: DS.belongsTo("cookie", {async: true}),
	sold: DS.attr("number"),
	returned: DS.attr("number"),
	given: DS.attr("number")
});

CookieTransaction.reopenClass({
	FIXTURES: [
		{
			id: 1,
			cookie: 1,
			sold: 3,
			given: 2
		},{
			id: 2,
			cookie: 2,
			sold: 1,
			given: 2
		},{
			id: 3,
			cookie: 1,
			sold: 1,
			returned: 4
		}
	]
});

export default CookieTransaction;