import authActions from './auth';
import env from '../../config/.env.json';
import configureMockStore from 'redux-mock-store';
import data from '../data.json';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import {
  HANDLE_LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SET_CURRENT_USER
} from '../types';
const mockStore = configureMockStore([thunk]);
const {
  BASE_URL
} = env;
describe('Auth Actions', () => {
  beforeEach(() => {
    moxios.install(axios);
  });
  afterEach(() => {
    moxios.uninstall(axios);
  });
  describe('Login Handler', () => {
    it('should user login fail', () => {
      const store = mockStore();
      const handleError = jest.fn();
      const navigate = jest.fn();
      const expectations = [{
        type: HANDLE_LOGIN
      },
      {
        type: LOGIN_FAILED,
        payload: {
          message: 'Invalid email or password',
          type: 'error'
        }
      }
      ];
      moxios.stubRequest(`${BASE_URL}/users/login`, {
        status: 400,
        response: {
          message: 'Login failed',
          errors: ['Invalid email or password']
        }
      });
      return store
        .dispatch(
          authActions.handleLogin({
            email: 'me@example.com',
            password: 'password'
          },
          handleError,
          navigate
          )
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectations);
          expect(handleError).toBeCalled();
          expect(navigate).not.toBeCalled();
        });
    });
    it('should user login successfully', () => {
      const store = mockStore();
      const handleError = jest.fn();
      const navigate = jest.fn();
      const expectations = [{
        type: HANDLE_LOGIN
      },
      {
        type: LOGIN_SUCCESS
      },
      {
        type: 'SET_CURRENT_USER',
        payload: {
          ...data.user
        }
      }
      ];
      moxios.stubRequest(`${BASE_URL}/users/login`, {
        status: 200,
        response: {
          token: 'qwerty-123456'
        }
      });
      moxios.stubRequest(`${BASE_URL}/users/current`, {
        status: 200,
        response: {
          data: {
            ...data.user
          }
        }
      });
      return store
        .dispatch(
          authActions.handleLogin({
            email: 'me@example.com',
            password: 'password'
          },
          handleError,
          navigate
          )
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectations);
          expect(navigate).toBeCalled();
          expect(handleError).not.toBeCalled();
        });
    });
  });

  describe('Fetch Current User', () => {
    it('should handle error on fetch current user', () => {
      const store = mockStore();
      const navigate = jest.fn();
      const handleError = jest.fn();

      moxios.stubRequest(`${BASE_URL}/users/current`, {
        status: 401,
        response: {
          message: 'Invalid or expired token'
        }
      });
      return store
        .dispatch(
          authActions.fetchCurrentUser('qwerty-1234', handleError, navigate)
        )
        .then(() => {
          expect(navigate).not.toBeCalled();
          expect(handleError).toBeCalled();
        });
    });
    it('should fetch user successfully', () => {
      const store = mockStore();
      const navigate = jest.fn();
      const handleError = jest.fn();
      const expectations = [{
        type: SET_CURRENT_USER,
        payload: {
          ...data.user
        }
      }];
      moxios.stubRequest(`${BASE_URL}/users/current`, {
        status: 200,
        response: {
          data: {
            ...data.user
          }
        }
      });
      return store
        .dispatch(authActions.fetchCurrentUser('qwerty-12345'))
        .then(() => {
          expect(store.getActions()).toEqual(expectations);
          expect(handleError).not.toBeCalled();
          expect(navigate).not.toBeCalled();
        });
    });
  });
});
