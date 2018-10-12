import React from 'react';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';

export default React.createClass({
    componentDidMount: function () {
        this.interval = window.setInterval(this.tick, 500);
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
        if (this.interval) {
            window.clearInterval(this.interval);
        }
    },
    onChange: function () {
        this.setState({
            reactionList: ReactionsStore.getAll()
        });
    },
    tick: function () {
        var randomIndex = Math.floor(Math.random() * this.state.reactionList.length);
        var randomName = this.props.users[Math.floor(Math.random() * this.props.users.length)]
        let id = this.state.reactionList[randomIndex].id;
        if (Math.random() < 0.5) {
            AppActions.voteAnswer1(id, randomName);
        } else {
            AppActions.voteAnswer2(id, randomName);
        }
    },
    getDefaultProps: function () {
        return {
            users: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        };
    },
    getInitialState: function () {
        return {
            reactionList: ReactionsStore.getAll()
        };
    },
    render: function () {
        return <div>Bot is active...</div>
    }

});