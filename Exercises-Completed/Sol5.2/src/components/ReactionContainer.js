import React from 'react'
import Reaction from './Reaction'

export default class ReactionContainer extends React.Component{
    render(){

        return(
        <div className="container">
            <Reaction question={42} answer1={41} 
                answer2={43}  imageUrl={true} />
            <Reaction />
            <Reaction question="Which is the better Apex predator?" answer1="Lion" 
                answer2="Human" imageUrl="/assets/lion.png" />
            <Reaction question="Which is faster?" answer1="Cheetah" 
                answer2="Ostrich" imageUrl="/assets/cheetah.png" />
        </div>
        );
    }
}