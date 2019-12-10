import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';

describe('Brand Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Brand />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
