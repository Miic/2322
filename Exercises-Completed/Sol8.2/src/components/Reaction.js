import React from 'react';

import AppActions from '../actions/AppActions';

export default React.createClass({
    getDefaultProps: function () {
        return {
            question: "What is the answer to life, the universe and everything?",
            answer1: "42",
            answer2: "NaN",
            imageUrl: "/assets/default-image.png",
            answer1Votes: [],
            answer2Votes: [],
            reactionSeconds: 0
        };
    },
    isActive: function () {
      return this.props.answer1Votes.indexOf("Student") < 0 && this.props.answer2Votes.indexOf("Student") < 0;
    },
    onAnswer1: function () {
        AppActions.voteAnswer1(this.props.id, "Student");
    },
    onAnswer2: function () {
        AppActions.voteAnswer2(this.props.id, "Student");
    },
    onRemove: function () {
      AppActions.remove(this.props.id);
    },
    propTypes: {
        question: React.PropTypes.string,
        answer1: React.PropTypes.any,
        answer2: React.PropTypes.any,
        imageUrl: React.PropTypes.string,
        answer1Votes: React.PropTypes.array,
        answer2Votes: React.PropTypes.array,
        reactionSeconds: React.PropTypes.number
    },
    render: function () {
        return <div style={{padding: 5, border: "1px black solid", margin: 10, width: 256, float: 'left'}}>
            <button onClick={this.onRemove}>Remove</button><br />
            <img src={this.props.imageUrl}/>


            <h3>{this.props.question}</h3>
            <button disabled={!this.isActive()} onClick={this.onAnswer1}>{this.props.answer1} [{this.props.answer1Votes.length}]
                [{Math.round(100 * this.props.answer1Votes.length / ( this.props.answer1Votes.length + this.props.answer2Votes.length))}]%
            </button>
            <button disabled={!this.isActive()} onClick={this.onAnswer2}>{this.props.answer2} [{this.props.answer2Votes.length}]
                [{Math.round(100 * this.props.answer2Votes.length / ( this.props.answer1Votes.length + this.props.answer2Votes.length))}]%
            </button>
        </div>;
    }

});