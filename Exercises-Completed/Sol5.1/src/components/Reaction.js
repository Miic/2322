import React from 'react'

export default class Reaction extends React.Component{
    render(){

        return(
            <div>
                <h3>{this.props.question}</h3>
                <button>{this.props.answer1}</button>
                <button>{this.props.answer2}</button>
            </div>
        );
    }
}