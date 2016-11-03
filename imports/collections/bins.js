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
        
    }
});

export const Bins = new Mongo.Collection('bins');
