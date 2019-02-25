import Route from '@ember/routing/route'
// import Ember from 'ember';
// const{ Route}=Ember;

export default Route.extend({
	model(params){
        return this.store.findRecord('photo',params.id)
    },
    actions:{ 
        addComment(comment){
            this.get('store').createRecord('comment', {
                id: Math.floor(Date.now() / 1000),
                description: comment
            })
            this.controller.set('commentValue', null);
            this.controller.set('comments', this.get('store').peekAll('comment'));   
        }
    }   
});