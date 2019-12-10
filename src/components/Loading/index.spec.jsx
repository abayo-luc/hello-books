import React from 'react';
import { shallow } from 'enzyme';
import Loading from './index';

describe('Loading Indictor', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
