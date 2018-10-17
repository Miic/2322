import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ReactionContainer from './ReactionContainer'
import {Route, Switch } from "react-router-dom";
import NewReactionForm from './NewReactionForm';
export default class UIRoot extends React.Component{
    render(){

        return(
            <div>
                <Header />
                    <Switch>
                        <Route exact path="/" component={ReactionContainer} />
                        <Route path="/add" component={NewReactionForm} />
                        <Route component={ReactionContainer} />
                    </Switch>
                <Footer />
            </div> 
        );
    }
}