import React from 'react'

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