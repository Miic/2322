import React, { Component } from 'react';
import UIRoot from './components/UIRoot';
import ReactionContainer from './components/ReactionContainer';
import AddReactionForm from './components/AddReactionForm';

import { Router, Route, IndexRoute } from 'react-router';

export default class App extends Component {

    render () {
        return <Router>
            <Route path="/" component={UIRoot}>
                <IndexRoute component={ReactionContainer}/>
                <Route path="add" component={AddReactionForm}/>
            </Route>
        </Router>;
    }

};