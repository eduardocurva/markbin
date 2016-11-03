import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';


class BinsMain extends Component {
    render(){
        //this.props.params.binId - comes from URL

        return (
            <div>BinsMain</div>
        )
    }
}
export default createContainer((props) => {
    const { binId} = props.params;
    Meteor.subscribe('bins');

    return { bin: Bins.findOne(binId) };
}, BinsMain);