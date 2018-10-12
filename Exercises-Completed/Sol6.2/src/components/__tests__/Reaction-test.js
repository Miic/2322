jest.dontMock('../Reaction');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Reaction = require('../Reaction');

describe('In a Reaction component', () => {
    let reaction = TestUtils.renderIntoDocument(
        <Reaction question="Test" answer1="A" answer2="B" />
    );
    let buttons = TestUtils.scryRenderedDOMComponentsWithTag(reaction, 'button');
    let firstButtonNode = ReactDOM.findDOMNode(buttons[0]);

    it('Clicking on a button should change button text', () => {

        TestUtils.Simulate.click(firstButtonNode);

        expect(firstButtonNode.textContent).toEqual('A [1] [100]%');

    });
});