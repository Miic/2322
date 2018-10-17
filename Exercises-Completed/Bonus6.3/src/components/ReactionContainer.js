import React from 'react'
import Reaction from './Reaction'

export default class ReactionContainer extends React.Component{
    render(){

        return(
        <div className="container">
            <div className="row">
                <Reaction question="Which bird is from the Struthionidae family?" answer1="Ostrich" 
                    answer2="Blue jay"  imageUrl="/assets/ostrich.png" reactionSeconds={20000} />
                <Reaction />
                <Reaction question="Which is the better Apex predator?" answer1="Lion" 
                    answer2="Human" imageUrl="/assets/lion.png" />
                <Reaction question="Which is faster?" answer1="Cheetah" reactionSeconds={20000} 
                    answer2="Ostrich" imageUrl="/assets/cheetah.png" />
            </div>
        </div>
        );
    }
}