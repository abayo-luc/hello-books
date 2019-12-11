import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Login } from './index';
const mockStore = configureStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    history: {
      replace: jest.fn()
    }
  })
}));
jest.mock('react-toast-notifications', () => ({
  useToasts: () => ({
    addToast: jest.fn()
  })
}));
const props = {
  handleLogin: jest.fn(),
  isSubmitting: false,
  success: false
};

const setAuthState = jest.fn();
describe('Login Page', () => {
  let wrapper;
  let store;
  beforeEach(() => {
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
      .find({ type: 'email' })
      .props()
      .onChange({ target: { value: 'me@example.com' } });
    expect(wrapper.find({ type: 'email' }).props().value).toEqual(
      'me@example.com'
    );
  });
  it('should respond on email input change', () => {
    wrapper
      .find({ type: 'password' })
      .props()
      .onChange({ target: { value: '12345' } });
    expect(wrapper.find({ type: 'password' }).props().value).toEqual('12345');
  });
  it('should respond on login button click', () => {
    const form = wrapper.find('#sign-up-form');
    form.simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(props.handleLogin).toBeCalled();
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
