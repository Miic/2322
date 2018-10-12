import React, { Component } from 'react';

import { Grid, Row, Alert, Image, Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap';


export default class ComponentsDemo extends Component {

    render() {

        let style = {backgroundColor: 'lightgray', border: '1px solid black'};
        return <div>
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand><Image src="/assets/rt-logo.svg"/></Navbar.Brand>
                    <Navbar.Brand>Hi</Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>Menu 1</NavItem>
                        <NavItem>Menu 2</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid><Row>
                <Alert bsStyle="warning">Mind now</Alert>
                <Jumbotron>
                    <h1>Hi There</h1>

                    <p>React bootstrap rocks</p>
                </Jumbotron>
            </Row></Grid></div>
    }

}