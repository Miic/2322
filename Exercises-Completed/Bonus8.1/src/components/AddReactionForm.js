import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import AppActions from '../actions/AppActions';

export default React.createClass({
    getInitialState: function () {
        return {
            question: "",
            answer1: "",
            answer2: "",
            imageUrl:""
        };
    },
    mixins: [LinkedStateMixin],
    onAddReaction: function (e) {
        e.preventDefault();
        var reactionToAdd = {
            id: (new Date()).getTime(),
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2
        };
        if (this.state.imageUrl !== "") {
            reactionToAdd.imageUrl = this.state.imageUrl;
        }
        AppActions.add(reactionToAdd);
        this.setState({
            question: "",
            answer1: "",
            answer2: "",
            imageUrl: ""
        });
    },
    render: function () {
        return <div style={{clear:'both'}}>
            <h2>Add Reaction</h2>
            <form onSubmit={this.onAddReaction}>
                <label>Question: <input valueLink={this.linkState('question')}/></label><br />
                <label>Answer 1: <input valueLink={this.linkState('answer1')}/></label><br />
                <label>Answer 2: <input valueLink={this.linkState('answer2')}/></label><br />
                <label>Image URL: <input  valueLink={this.linkState('imageUrl')}/></label><br />
                <input type="submit" value="Add" />
            </form>
        </div>;
    }

});