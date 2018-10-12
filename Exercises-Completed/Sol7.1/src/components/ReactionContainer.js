import React from 'react';
import Reaction from './Reaction';

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
    onQuestionChanged: function (e) {
        this.setState({
            question: e.target.value
        });
    },
    onAnswer1Changed: function (e) {
        this.setState({
            answer1: e.target.value
        });
    },
    onAnswer2Changed: function (e) {
        this.setState({
            answer2: e.target.value
        });
    },
    onImageUrlChanged: function (e) {
        this.setState({
            imageUrl: e.target.value
        });
    },
    onAddReaction: function (e) {
        e.preventDefault();
        var list = this.state.reactionList;
        var reactionToAdd = {
            id: (new Date()).getTime(),
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2,
            imageUrl: this.state.imageUrl
        };
        list.push(reactionToAdd);
        this.setState({
            reactionList: list
        });
    },
    render: function () {
        return <div>
            {
                this.state.reactionList.map(item =>
                        <Reaction {...item} key={item.id}/>
                )
            }
            <div style={{clear:'both'}}>
                <h2>Add Reaction</h2>

                <form onSubmit={this.onAddReaction}>
                    <label>Question: <input value={this.state.question}
                                            onChange={this.onQuestionChanged}/></label><br />
                    <label>Answer 1: <input value={this.state.answer1} onChange={this.onAnswer1Changed}/></label><br />
                    <label>Answer 2: <input value={this.state.answer2} onChange={this.onAnswer2Changed}/></label><br />
                    <label>Image URL: <input value={this.state.imageUrl}
                                             onChange={this.onImageUrlChanged}/></label><br />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        </div>;
    }

});