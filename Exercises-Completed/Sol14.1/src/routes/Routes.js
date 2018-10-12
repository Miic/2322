import React, { Component } from 'react';

import { Route, IndexRoute } from 'react-router';

import UIRoot from '../components/UIRoot';
import AddReactionForm from '../components/AddReactionForm';
import Home from '../components/Home';
import ReactionContainer from '../components/ReactionContainer';
import ReactionDetail from '../components/ReactionDetail';
import NotFound from '../components/NotFound';

let Routes = <Route path="/" component={UIRoot}>
    <IndexRoute component={Home}/>
    <Route path="add" component={AddReactionForm}/>
    <Route path="reactions" component={ReactionContainer}/>
    <Route path="reactions/:id" component={ReactionDetail}/>
    <Route path="*" component={NotFound}/>
</Route>

export default Routes;