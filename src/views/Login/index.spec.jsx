import React from 'react';
import { shallow } from 'enzyme';
import router from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Login } from './index';
const mockStore = configureStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory () {
    return {
      replace: jest.fn()
    };
  }
}));
jest.mock('react-toast-notifications', () => ({
  useToasts: () => ({
    addToast: jest.fn()
  })
}));
const props = {
  handleLogin: jest
    .fn()
    .mockImplementation((data, handleError, navigate) => handleError()),
  isSubmitting: false,
  success: false
};

const setAuthState = jest.fn();
describe('Login Page', () => {
  let wrapper;
  let store;
  let replace;
  beforeEach(() => {
    replace = jest.fn();
    router.useHistory = jest.fn().mockImplementation(() => ({ replace }));
    jest
      .spyOn(React, 'useState')
      .mockImplementation(authState => [authState, setAuthState]);
    store = mockStore({
      auth: {
        currentUser: null,
        isSubmitting: false,
        errors: null
      }
    });
    wrapper = shallow(<Login store={store} {...props} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should respond on email input change', () => {
    wrapper
      .find({ name: 'email' })
      .props()
      .onChange({ target: { value: 'me@example.com', name: 'email' } });
    expect(wrapper.find({ name: 'email' }).props().value).toEqual(
      'me@example.com'
    );
  });
  it('should respond on email input change', () => {
    wrapper
      .find({ name: 'password' })
      .props()
      .onChange({ target: { value: '12345', name: 'password' } });
    expect(wrapper.find({ name: 'password' }).props().value).toEqual('12345');
  });
  it('should respond on login button click, and display error', () => {
    const preventDefault = jest.fn();
    const form = wrapper.find('#login-form');
    form.simulate('submit', {
      preventDefault
    });
    expect(props.handleLogin).toBeCalled();
    expect(preventDefault).toBeCalled();
    expect(replace).not.toBeCalled();
  });
  it('should respond on login button click, and navigate', () => {
    const newProps = {
      ...props,
      handleLogin: jest
        .fn()
        .mockImplementation((data, handleError, navigate) => navigate())
    };
    const wrapper = shallow(<Login {...newProps} />);
    const preventDefault = jest.fn();
    const form = wrapper.find('#login-form');
    form.simulate('submit', {
      preventDefault
    });
    expect(newProps.handleLogin).toBeCalled();
    expect(preventDefault).toBeCalled();
    expect(replace).toBeCalled();
  });
  it('should show loading indicator', () => {
    const newProps = {
      handleLogin: jest.fn(),
      isSubmitting: true,
      success: true
    };
    wrapper = shallow(<Login {...newProps} store={store} />);
    expect(wrapper.name()).toEqual('_default');
  });
});
