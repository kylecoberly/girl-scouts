import DS from 'ember-data';

var Cookie = DS.Model.extend({
	slug: DS.attr("string"),
	name: DS.attr("string"),
	price: DS.attr("number")
});

Cookie.reopenClass({
	FIXTURES: [
		{
			id: 1,
			slug: "thin-mints",
			name: "Thin Mints",
			price: 5.00
		},{
			id: 2,
			slug: "samoas",
			name: "Samoas",
			price: 5.00
		},{
			id: 3,
			slug: "tagalongs",
			name: "Tagalongs",
			price: 5.00
		},{
			id: 4,
			slug: "trefoils",
			name: "Trefoils",
			price: 5.00
		},{
			id: 5,
			slug: "do-si-dos",
			name: "Do-si-dos",
			price: 5.00
		},{
			id: 6,
			slug: "cranberry-citrus-crisps",
			name: "Cranberry Citrus Crisps",
			price: 5.00
		},{
			id: 7,
			slug: "lemonades",
			name: "Lemonades",
			price: 5.00
		},{
			id: 8,
			slug: "rah-rah-raisins",
			name: "Rah-Rah Raisin",
			price: 5.00
		},{
			id: 9,
			slug: "savannah-smiles",
			name: "Savannah Smiles",
			price: 5.00
		},{
			id: 10,
			slug: "thanks-a-lot",
			name: "Thanks-A-Lot",
			price: 5.00
		},{
			id: 11,
			slug: "toffee-tastic",
			name: "Toffee-tastic",
			price: 5.00
		},{
			id: 12,
			slug: "trios",
			name: "Trios",
			price: 5.00
		},
	]
});

export default Cookie;