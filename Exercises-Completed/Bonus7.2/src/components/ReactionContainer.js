import React from 'react';
import Reaction from './Reaction';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default React.createClass({
    getInitialState: function () {
        return {
            reactionList: [
                {id: 0, question: "Which dressing is tastier?", answer1: "Ranch", answer2: "Vinaigrette"},
                {
                    id: 1,
                    question: "Which has the better mane?",
                    answer1: "Lion",
                    answer2: "Horse",
                    imageUrl: "/assets/lion.png"
                },
                {
                    id: 2,
                    question: "Which is faster?",
                    answer1: "Cheetah",
                    answer2: "Car",
                    imageUrl: "/assets/cheetah.png"
                },
                {
                    id: 3,
                    question: "Which bird has the heavier legs?",
                    answer1: "Turkey",
                    answer2: "Ostrich",
                    imageUrl: "/assets/ostrich.png"
                },
            ],
            question: "",
            answer1: "",
            answer2: "",
            imageUrl: ""
        };
    },
    mixins: [LinkedStateMixin],
    onAddReaction: function (e) {
        e.preventDefault();
        var list = this.state.reactionList;
        var reactionToAdd = {
            id: (new Date()).getTime(),
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2
        };
        if (this.state.imageUrl !== "") {
            reactionToAdd.imageUrl = this.state.imageUrl;
        }
        list.push(reactionToAdd);
        this.setState({
            reactionList: list,
            question: "",
            answer1: "",
            answer2: "",
            imageUrl: ""
        });
    },
    onRemoveReaction: function (id) {
        var list = this.state.reactionList;
        var index = list.findIndex(function (item) {
            return item.id === id;
        });
        list.splice(index, 1);
        this.setState({
            reactionList: list
        });
    },
    render: function () {
        return <div>
            {

                this.state.reactionList.map(item =>
                        <Reaction {...item} key={item.id}
                                            onRemove={this.onRemoveReaction.bind(this, item.id)}/>
                )
            }
            <div style={{clear:'both'}}>
                <h2>Add Reaction</h2>

                <form onSubmit={this.onAddReaction}>
                    <label>Question: <input valueLink={this.linkState('question')}/></label><br />
                    <label>Answer 1: <input valueLink={this.linkState('answer1')}/></label><br />
                    <label>Answer 2: <input valueLink={this.linkState('answer2')}/></label><br />
                    <label>Image URL: <input valueLink={this.linkState('imageUrl')}/></label><br />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        </div>;
    }

});