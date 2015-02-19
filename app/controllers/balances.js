import Ember from 'ember';

export default Ember.Controller.extend({
	girls: [
		{
			slug: "susan",
			name: "Susan"
		},{
			slug: "holly",
			name: "Holly"
		}
	],
	cookies: [
		{
			slug: "dosi-do",
			name: "Dosi-Do"
		},{
			slug: "slick-rick",
			name: "Slick Ricks"
		}
	],
	transactions: [
		{
			date: "4/1/2007",
			girl: {
				slug: "susan",
				name: "Susan"
			},
			moneyGiven: "144.13",
			cookieTransactions: [
				{
					cookie: {
						slug: "slick-rick",
						name: "Slick Ricks"
					},
					sold: 2,
					returned: 3,
					given: 1
				},{
					cookie: {
						slug: "dosi-do",
						name: "Dosi-Do"
					},
					sold: 1,
					given: 3
				}
			]
		},{}
	]
});