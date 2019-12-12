import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';

describe('Sign Up Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  [
    { value: 'Username', name: 'name' },
    { value: 'me@example.com', name: 'email' },
    { value: 'password', name: 'password' }
  ].forEach(({ name, value }) => {
    it(`should respond on ${name} input change`, () => {
      wrapper
        .find({ name })
        .props()
        .onChange({ target: { name, value } });
      expect(wrapper.find({ name }).props().value).toEqual(value);
    });
  });

  it('should respond on form submit', () => {
    const preventDefault = jest.fn();
    const form = wrapper.find('#sign-up-form');
    form.simulate('submit', {
      preventDefault
    });
    expect(preventDefault).toBeCalled();
  });
});
