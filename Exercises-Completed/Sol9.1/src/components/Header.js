import React from 'react';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';
import {Navbar, Nav, NavItem, Image, Input} from 'react-bootstrap';

export default React.createClass({
    getInitialState: function () {
      return {
          name: ReactionsStore.getName()
      };
    },
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            name: ReactionsStore.getName()
        });
    },
    onNameChange: function (e) {
        AppActions.setUsername(e.target.value);
    },
    render: function () {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Image src="/assets/rt-logo.svg"/>
                </Navbar.Brand>
                <Navbar.Brand>
                    Reaction Tracker
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight>
                    <Input type="text" value={this.state.name} onChange={this.onNameChange} />
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem href="#">Reactions</NavItem>
                    <NavItem href="#">Add</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;

    }

});