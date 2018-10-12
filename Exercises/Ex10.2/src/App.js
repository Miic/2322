import React, { Component } from 'react';
import UIRoot from './components/UIRoot';

import AddReactionForm from './components/AddReactionForm';
import Home from './components/Home';
import ReactionContainer from './components/ReactionContainer';

import { Router, Route, IndexRoute } from 'react-router';

export default class App extends Component {

    render () {
        return <Router>
            <Route path="/" component={UIRoot}>
                <IndexRoute component={Home}/>
                <Route path="add" component={AddReactionForm}/>
                <Route path="reactions" component={ReactionContainer}/>
            </Route>
        </Router>;
    }

};