import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import FunctionalApp from "./FunctionalApp";
import {ClassApp} from "./ClassApp";

Enzyme.configure({ adapter: new Adapter() })

const isbnInputs = {
  correct: "1-2344-5678-9"
}

const inputEvent = (input) => ({
  target: {
    value: input
  }
});

describe('Functional App', () => {
  it('should disable delete button if isbn is incorrectly formatted', () => {
    const wrapper = shallow(<FunctionalApp/>);
  });
});

describe('Class App', () => {
  it('should disable delete button if isbn is incorrectly formatted', () => {
    const wrapper = shallow(<ClassApp/>);
  });
});
