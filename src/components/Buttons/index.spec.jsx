import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button title='Send' />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
