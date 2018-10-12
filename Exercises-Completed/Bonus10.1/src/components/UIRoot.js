import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import Bot from './Bot';
import Header from './Header';
import Footer from './Footer';

export default class UIRoot extends Component {
    render() {
        return <div>
            <Header />
            <Grid>
                <Bot />
                {this.props.children}
            </Grid>
            <Footer />
        </div>;
    }
};