import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		guardar(model){
			model.save();
			
		},
		cancel(){}
	}
});
