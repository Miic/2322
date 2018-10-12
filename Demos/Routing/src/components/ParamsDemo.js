import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

export default class ParamsDemo extends Component {
    render() {

        console.log(JSON.stringify(this.props));
        return <div>
            <h1>this.props.params</h1>
            <code>
                {JSON.stringify(this.props.params)}
            </code>
            <h1>this.props.location.search</h1>
            <code>
                {

                    JSON.stringify(this.props.location.search)
                }
            </code>
        </div>
    }
};