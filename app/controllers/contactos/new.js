import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		guardar(model){
			model.save();
			this.transitionToRoute('contactos.show',model);
		},
		cancel(){}
	}
});
