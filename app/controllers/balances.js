import Ember from 'ember';

export default Ember.Controller.extend({
	totalAmountOutstanding: function(){
		var totalAmountOutstanding = 0;
		this.get("girls").forEach(function(girl){
			totalAmountOutstanding += girl.get("outstandingDollars");
		});
		return totalAmountOutstanding;
	}.property("girls.@each")
});