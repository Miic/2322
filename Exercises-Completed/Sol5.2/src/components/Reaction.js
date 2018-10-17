import React from 'react'
import PropTypes from 'prop-types'

export default class Reaction extends React.Component{
    render(){
        let {imageUrl, question, answer1, answer2} = this.props;
        return(
            <div>
                <img src={imageUrl} />
                <h3>{question}</h3>
                <button>{answer1}</button>
                <button>{answer2}</button>
            </div>
        );
    }
}

Reaction.propTypes = {
    question: PropTypes.string.isRequired,    
    answer1: PropTypes.any,    
    answer2: PropTypes.any,    
    imageUrl: PropTypes.string
}

Reaction.defaultProps = {    
    question: "What is the answer to life?",    
    answer1: "42",    
    answer2: "NaN",    
    imageUrl: "/assets/default-image.png"};