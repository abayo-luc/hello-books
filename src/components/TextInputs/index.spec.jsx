import React from 'react';
import TextInput from './index';
import { shallow } from 'enzyme';
const props = {
  icon: 'email',
  type: 'email'
};
describe('TextInput', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TextInput {...props} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
