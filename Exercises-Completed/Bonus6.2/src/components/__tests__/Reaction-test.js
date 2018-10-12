jest.dontMock('../Reaction');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Reaction = require('../Reaction');

describe('In a Reaction component', () => {
    let reaction, buttons, firstButtonNode, secondButtonNode;

    beforeEach(() => {
        reaction = TestUtils.renderIntoDocument(
            <Reaction question="Test" answer1="A" answer2="B" />
        );
        buttons = TestUtils.scryRenderedDOMComponentsWithTag(reaction, 'button');
        firstButtonNode = ReactDOM.findDOMNode(buttons[0]);
        secondButtonNode = ReactDOM.findDOMNode(buttons[1]);
    });

    it('Heading should have question text', () => {
        let heading = TestUtils.findRenderedDOMComponentWithTag(reaction, 'h3');
        let headingNode = ReactDOM.findDOMNode(heading);
        expect(headingNode.textContent).toEqual('Test');
    });

    it('Clicking on a button once should give 1 [100]% 0[0]%', () => {
        TestUtils.Simulate.click(firstButtonNode);

        expect(firstButtonNode.textContent).toEqual('A [1] [100]%');
        expect(secondButtonNode.textContent).toEqual('B [0] [0]%');
    });
    it('Clicking on a button twice should give 2 [100]% 0[0]%', () => {
        TestUtils.Simulate.click(firstButtonNode);
        TestUtils.Simulate.click(firstButtonNode);

        expect(firstButtonNode.textContent).toEqual('A [2] [100]%');
        expect(secondButtonNode.textContent).toEqual('B [0] [0]%');
    });

    it('Clicking first button and second button should give 50% on each', () => {
        TestUtils.Simulate.click(firstButtonNode);
        TestUtils.Simulate.click(secondButtonNode);

        expect(firstButtonNode.textContent).toEqual('A [1] [50]%');
        expect(secondButtonNode.textContent).toEqual('B [1] [50]%');
    });

    it('Clicking first button twice and second button should give 67% and 33%', () => {
        TestUtils.Simulate.click(firstButtonNode);
        TestUtils.Simulate.click(firstButtonNode);
        TestUtils.Simulate.click(secondButtonNode);

        expect(firstButtonNode.textContent).toEqual('A [2] [67]%');
        expect(secondButtonNode.textContent).toEqual('B [1] [33]%');
    });

});