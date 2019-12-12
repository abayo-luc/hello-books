import React from 'react';
import { mount } from 'enzyme';
import Footer from './index';
describe('Footer Component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
