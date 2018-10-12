import React, { Component } from 'react';
import UIRoot from './components/UIRoot';

import AddReactionForm from './components/AddReactionForm';
import Home from './components/Home';
import ReactionContainer from './components/ReactionContainer';
import ReactionDetail from './components/ReactionDetail';
import ParamsDemo from './components/ParamsDemo';
import NotFound from './components/NotFound';

import { Router, Route, IndexRoute } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();

export default class App extends Component {

    render () {
        return <Router history={history}>
            <Route path="/" component={UIRoot}>
                <IndexRoute component={Home}/>
                <Route path="reactions" component={ReactionContainer} />
                <Route path="reactions/:id" component={ReactionDetail} />
                <Route path="a/*" component={ParamsDemo}/>
                <Route path="b/:letterOne/:letterTwo" component={ParamsDemo}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>;
    }

};