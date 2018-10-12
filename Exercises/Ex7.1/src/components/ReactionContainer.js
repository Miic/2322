import React from 'react';
import Reaction from './Reaction';

export default React.createClass({
    getInitialState: function () {
        return {
            reactionList: [
            {id: 0, question: "Which dressing is tastier?", answer1: "Ranch", answer2: "Vinaigrette"},
            {id: 1, question: "Which has the better mane?", answer1: "Lion", answer2: "Horse", imageUrl:"/assets/lion.png"},
            {id: 2, question: "Which is faster?", answer1: "Cheetah", answer2: "Car", imageUrl:"/assets/cheetah.png"},
            {id: 3, question: "Which bird has the heavier legs?", answer1: "Turkey", answer2: "Ostrich", imageUrl:"/assets/ostrich.png"},
        ]};
    },
    render: function () {
        return <div>
            {
                this.state.reactionList.map( item =>
                    <Reaction {...item} key={item.id} />
                )
            }
        </div>;
    }

});