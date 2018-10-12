import React from 'react';

let Reaction = (props)=> {
    return <div style={{padding: 5, border: "1px black solid", margin: 10, width: 256, float: 'left'}}>
        <img src={props.imageUrl} />
        <h3>{props.question}</h3>
        <button>{props.answer1}</button>
        <button>{props.answer2}</button>
    </div>;
}

Reaction.defaultProps = {
    question: "What is the answer to life, the universe and everything?",
    answer1: "42",
    answer2: "NaN",
    imageUrl: "/assets/default-image.png"
};

Reaction.propTypes = {
    question: React.PropTypes.string,
    answer1: React.PropTypes.any,
    answer2: React.PropTypes.any,
    imageUrl: React.PropTypes.string
};

export default Reaction;