import {Mongo} from 'meteor/mongo';

Meteor.methods({

    'bins.insert': function (){
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId // if user is authenticated,
                //we can use this.userId all over the meteor
                //this.userid can be determined at runtime
        });
    },

    'bins.remove': function(bin){
        return Bins.remove(bin);
        
    },

    'bins.update': function(bin, content){
        return Bins.update(bin._id, { $set: { content }});

    },

    'bins.share': function(bin, email){
        
        //push = push a new record into the array
        //The line below means:
        //find the bin with this id; find the array property called
        //sharedWith and push email as new value
        return Bins.update(bin._id, {$push: {sharedWith: email }});

    }

});

export const Bins = new Mongo.Collection('bins');
