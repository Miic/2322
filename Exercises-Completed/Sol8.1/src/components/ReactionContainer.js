import React from 'react';
import Reaction from './Reaction';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';

export default React.createClass({
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            reactionList: ReactionsStore.getAll()
        });
    },
    getInitialState: function () {
        return {
            reactionList: ReactionsStore.getAll(),
            question: "",
            answer1: "",
            answer2: "",
            imageUrl: ""
        };
    },
    mixins: [LinkedStateMixin],
    onAddReaction: function (e) {
        e.preventDefault();
        //var list = this.state.reactionList;
        var reactionToAdd = {
            id: (new Date()).getTime(),
            question: this.state.question,
            answer1: this.state.answer1,
            answer2: this.state.answer2
        };
        if (this.state.imageUrl !== "") {
            reactionToAdd.imageUrl = this.state.imageUrl;
        }
        AppActions.add(reactionToAdd);
        //list.push(reactionToAdd);
        this.setState({
            //reactionList: list,
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