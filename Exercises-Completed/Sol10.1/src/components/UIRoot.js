import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ReactionContainer from './ReactionContainer'
import {Route } from "react-router-dom";
import NewReactionForm from './NewReactionForm';
export default class UIRoot extends React.Component{
    render(){

        return(
            <div>
                <Header />
                    <Route exact path="/" component={ReactionContainer} />
                    <Route path="/add" component={NewReactionForm} />
                <Footer />
            </div> 
        );
    }
}