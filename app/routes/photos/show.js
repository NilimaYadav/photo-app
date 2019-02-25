import { hash } from 'rsvp';
import Ember from 'ember';
const{ Route,set}=Ember;

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
            debugger
            this.controller.set('comments', this.get('store').peekAll('comment'));
            debugger
        }
    }
           
    // actions:{
    //     update(){
    //         this.get('model').pushObject({
    //             name:'nilima',
    //             text:this.get('text')
    //         });
    //     }
    // }
	
    

	// actions:{
    //     addComment(comment){
    //         this.get('store').createRecord('comment', {
    //             id: Math.floor(Date.now() / 1000),
    //             description: comment
    //         })
    //         this.controller.set('comment', null);
    //         comment.save()

    //     },
    //     readComment(comment){
    //         let id=this.get('commentId')
    //         this.store.findRecord('comment',1)
    //     }
       
    //         }
});