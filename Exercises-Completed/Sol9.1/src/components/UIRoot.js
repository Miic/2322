import React, { Component } from 'react';

import { Grid, Jumbotron } from 'react-bootstrap';

import Bot from './Bot';
import Header from './Header';
import ReactionContainer from './ReactionContainer';
import Footer from './Footer';

export default class UIRoot extends Component {

    render() {
        return <div>
            <Header />
            <Bot />
            <Grid>
                <Jumbotron>
                    <h1>Welcome to Reaction Tracker!</h1>
                    <p>Reaction Tracker is the best way to find out what people are thinking about things right now!</p>
                </Jumbotron>
            </Grid>
            <ReactionContainer />
            <Footer />
        </div>;
    }

};