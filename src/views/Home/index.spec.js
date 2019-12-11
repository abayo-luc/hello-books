import React from 'react';
import Home from './index';
import {
  shallow
} from 'enzyme';

describe('Home Page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it('should match home snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
