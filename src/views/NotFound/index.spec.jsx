import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

describe('Not Found Page', () => {
  test('should match the snapshot', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
