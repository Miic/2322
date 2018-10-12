import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';


export default class GridDemo extends Component {

    render() {

        let style = {backgroundColor:'lightgray', border: '1px solid black'};
        return <Grid>
            <Row>
                <Col style={style} lg={3}>
                    Col lg=3
                </Col>
                <Col style={style} lg={3}>
                    Col lg=3
                </Col>
                <Col style={style} lg={3}>
                    Col lg=3
                </Col>
                <Col style={style} lg={3}>
                    Col lg=3
                </Col>
            </Row>
            <Row>
                <Col style={style} md={4}>
                    Col md=4
                </Col>
                <Col style={style} md={4}>
                    Col md=4
                </Col>
                <Col style={style} md={4}>
                    Col md=4
                </Col>
            </Row>
            <Row>
                <Col style={style} sm={6}>
                    Col sm=6
                </Col>
                <Col style={style} sm={6}>
                    Col sm=6
                </Col>
            </Row>
        </Grid>
    }

}