import DS from 'ember-data';

var CookieTransaction = DS.Model.extend({
	cookie: DS.belongsTo("cookie", {async: true}),
	sold: DS.attr("number"),
	returned: DS.attr("number"),
	given: DS.attr("number"),
	dollarValue: function(){
		var dollarValue = 0;
		var cookiePrice = parseInt(this.get("cookie.price"));
		var returned = parseInt(this.get("returned"));
		var given = parseInt(this.get("given"));

		if (returned){
			dollarValue += (returned * cookiePrice);
		}
		if (given){
			dollarValue -= (given * cookiePrice);
		}
		
		return dollarValue;
	}.property("cookie", "sold", "returned", "given")
});

CookieTransaction.reopenClass({
	FIXTURES: [
	]
});

export default CookieTransaction;