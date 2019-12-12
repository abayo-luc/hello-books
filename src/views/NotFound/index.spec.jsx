import React from 'react';
import { shallow } from 'enzyme';
import router from 'react-router-dom';
import NotFound from './index';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory () {
    return {
      goBack: jest.fn()
    };
  }
}));
describe('Not Found Page', () => {
  let wrapper;
  const goBack = jest.fn();
  router.useHistory = jest.fn().mockImplementation(() => ({ goBack }));

  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });
  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should respond to go back', () => {
    const button = wrapper.find('#go-back-btn');
    button.simulate('click');
    expect(goBack).toBeCalled();
  });
});
