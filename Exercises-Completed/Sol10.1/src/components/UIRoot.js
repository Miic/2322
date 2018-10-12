import React, { Component } from 'react';

import { Grid, Jumbotron } from 'react-bootstrap';

import Bot from './Bot';
import Header from './Header';
import Footer from './Footer';

export default class UIRoot extends Component {
    render() {
        return <div>
            <Header />
            <Grid>
                <Bot />
                <Jumbotron>
                    <h1>Welcome to Reaction Tracker!</h1>
                    <p>Reaction Tracker is the best way to find out what people are thinking about things right now!</p>
                </Jumbotron>
                {this.props.children}
            </Grid>
            <Footer />
        </div>;
    }
};