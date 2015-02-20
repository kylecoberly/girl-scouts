import DS from 'ember-data';

var Girl = DS.Model.extend({
	slug: DS.attr("string"),
	name: DS.attr("string"),
	outstandingDollars: DS.attr("number", {defaultValue: 0}),
	outstandingBoxes: function(){
		var outstandingBoxes = 0;
		this.get("cookieStocks").forEach(function(cookieStock){
			outstandingBoxes += cookieStock.get("quantity");
		});
		return outstandingBoxes;
	}.property("cookieStocks.@each.quantity"),
	cookieStocks: DS.hasMany("cookieStock", {async: true})
});

Girl.reopenClass({
	FIXTURES: [
		{
			id: 1,
			slug: "girl-1",
			name: "Girl One"
		},{
			id: 2,
			slug: "girl-2",
			name: "Girl Two"
		},{
			id: 3,
			slug: "girl-3",
			name: "Girl Three"
		},{
			id: 4,
			slug: "girl-4",
			name: "Girl Four"
		},{
			id: 5,
			slug: "girl-5",
			name: "Girl Five"
		},{
			id: 6,
			slug: "girl-6",
			name: "Girl Six"
		},{
			id: 7,
			slug: "girl-7",
			name: "Girl Seven"
		},{
			id: 8,
			slug: "girl-8",
			name: "Girl Eight"
		},{
			id: 9,
			slug: "girl-9",
			name: "Girl Nine"
		},{
			id: 10,
			slug: "girl-10",
			name: "Girl Ten"
		},{
			id: 11,
			slug: "girl-11",
			name: "Girl Eleven"
		},{
			id: 12,
			slug: "girl-12",
			name: "Girl Twelve"
		},
	]
});

export default Girl;