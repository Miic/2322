import React, { Component } from 'react';
import Bot from './Bot';
import Header from './Header';
import ReactionContainer from './ReactionContainer';
import Footer from './Footer';

export default class UIRoot extends Component {

    render () {
        return <div>
            <Header />
            <Bot />
            <h1>Welcome to Reaction Tracker!</h1>
            <ReactionContainer />
            <Footer />
        </div>;
    }

};