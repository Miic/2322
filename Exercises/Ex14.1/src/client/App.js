import React, { Component } from 'react';


import { Router, Route, IndexRoute } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import Routes from '../routes/Routes';


let history = createBrowserHistory();

export default class App extends Component {

    render () {
        return <Router history={history}>
            {Routes}
        </Router>;
    }

};