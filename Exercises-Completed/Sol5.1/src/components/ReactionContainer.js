import React from 'react'
import Reaction from './Reaction'

export default class ReactionContainer extends React.Component{
    render(){

        return(
        <div className="container">
            <Reaction question="Which is the better Apex predator?" answer1="Lion" 
                answer2="Human" />
            <Reaction question="Which is faster?"answer1="Cheetah" 
                answer2="Ostrich" />
        </div>
        );
    }
}