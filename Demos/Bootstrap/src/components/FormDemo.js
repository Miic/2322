import React, { Component } from 'react';

import { Grid, Row, Input, ButtonInput } from 'react-bootstrap';


export default class FormDemo extends Component {

    render() {

        let style = {backgroundColor: 'lightgray', border: '1px solid black'};
        return <Grid><Row><form>
            <Input type="text" label="Question:"/>
            <Input type="text" label="Answer 1:"/>
            <Input type="text" label="Answer 2:"/>
            <ButtonInput bsStyle="primary" value="Add"/>
        </form></Row></Grid>
    }

}