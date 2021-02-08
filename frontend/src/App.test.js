import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />); // shallow returns an object thar represents the component

// mount is more powerful than shallow, as it aldo imports component's 
// children and lifecycle methods

// describe is used to group your tests
describe('App render', () => {
// it is an alias for test, both do the same
 /*  it('renders correctly', () => {
    expect(app).toMatchSnapshot(); 
  }); */
  test('renders correctly', () => {
    expect(app).toMatchSnapshot(); // snapshot keep an history of react component and every time a change is made, s
    // snapshot is updated and ensures that previous snapshots and test files match the new one
  });

});