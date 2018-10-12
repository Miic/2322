import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import Reaction from './Reaction';
import AddReactionForm from './AddReactionForm';

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
            reactionList: ReactionsStore.getAll(),
            name: ReactionsStore.getName()
        });
    },
    getInitialState: function () {
        return {
            reactionList: ReactionsStore.getAll() //,
            //question: "",
            //answer1: "",
            //answer2: "",
            //imageUrl:""
        };
    },
    //mixins: [LinkedStateMixin],
    //onAddReaction: function (e) {
    //    e.preventDefault();
    //    //var list = this.state.reactionList;
    //    var reactionToAdd = {
    //        id: (new Date()).getTime(),
    //        question: this.state.question,
    //        answer1: this.state.answer1,
    //        answer2: this.state.answer2
    //    };
    //    if (this.state.imageUrl !== "") {
    //        reactionToAdd.imageUrl = this.state.imageUrl;
    //    }
    //    AppActions.add(reactionToAdd);
    //    //list.push(reactionToAdd);
    //    this.setState({
    //        //reactionList: list,
    //        question: "",
    //        answer1: "",
    //        answer2: "",
    //        imageUrl: ""
    //    });
    //},
    //onRemoveReaction: function (id) {
    //    var list = this.state.reactionList;
    //    var index = list.findIndex(function (item) {
    //        return item.id === id;
    //    });
    //    list.splice(index, 1);
    //    this.setState({
    //        reactionList: list
    //    });
    //},
    render: function () {
        return <Row>
                {

                    this.state.reactionList.map(item =>
                            <Reaction {...item} key={item.id} name={this.state.name}/>
                    )
                }
                <AddReactionForm />
            </Row>;
    }

});