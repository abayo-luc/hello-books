import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

describe('TopNav Component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <TopNav>
        <p>Hello world</p>
      </TopNav>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
