import React from 'react';
import Reaction from '../Reaction';
import { shallow } from 'enzyme';

const aReactionComponent = shallow(<Reaction question="Meaning of life?" 
  answer1="13" answer2="42" imageUrl="/assets/cheetah.png" />);
const aReactionObject = aReactionComponent.instance();

it('creates a Reaction without crashing', () => {
  expect(aReactionComponent).toBeTruthy();
});

it('has an answer2 of 42', () => {
  expect(aReactionObject.props.answer2).toBe('42');
});


