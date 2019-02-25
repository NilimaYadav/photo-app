import Route from '@ember/routing/route'
// import Ember from 'ember';
import { set } from '@ember/object';
export default Route.extend({
	model() {		
		return this.store.findAll('photo');
	},

	setupController(controller,model){
		set(controller,'photos',model);
	},
	actions:{
        move(photo){
			this.get('router').transitionTo('photos.show', photo.get('id'));
		}	
    }
});
