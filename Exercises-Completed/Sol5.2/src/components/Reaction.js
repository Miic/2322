import React from 'react';

export default React.createClass({
    getDefaultProps: function () {
        return {
            question: "What is the answer to life, the universe and everything?",
            answer1: "42",
            answer2: "NaN",
            imageUrl: "/assets/default-image.png"
        };
    },
    propTypes: {
        question: React.PropTypes.string,
        answer1: React.PropTypes.any,
        answer2: React.PropTypes.any,
        imageUrl: React.PropTypes.string
    },
    render: function () {
        return <div>
            <img src={this.props.imageUrl} />
            <h3>{this.props.question}</h3>
            <button>{this.props.answer1}</button>
            <button>{this.props.answer2}</button>
        </div>;
    }

});