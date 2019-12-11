import authReducers from './auth';
import data from '../data.json';
import {
  HANDLE_LOGIN,
  LOGIN_SUCCESS,
  SET_CURRENT_USER,
  LOGIN_FAILED
} from '../types';

describe('Auth Reducers', () => {
  let INITIAL_STATE;
  beforeEach(() => {
    INITIAL_STATE = {
      currentUser: null,
      isSubmitting: false,
      errors: null,
      success: false
    };
  });
  it('should update submitting status on handle login', () => {
    expect(authReducers(INITIAL_STATE, {
      type: HANDLE_LOGIN
    })).toEqual({
      ...INITIAL_STATE,
      isSubmitting: true
    });
  });
  it('should update state on login success', () => {
    expect(authReducers(INITIAL_STATE, {
      type: LOGIN_SUCCESS
    })).toEqual({
      ...INITIAL_STATE,
      success: true
    });
  });
  it('should update state with current user', () => {
    expect(authReducers(INITIAL_STATE, {
      type: SET_CURRENT_USER,
      payload: data.user
    })).toEqual({
      ...INITIAL_STATE,
      currentUser: data.user,
      isSubmitting: false
    });
  });
  it('should state with error on failure', () => {
    expect(authReducers({
      ...INITIAL_STATE,
      isSubmitting: true
    }, {
      type: LOGIN_FAILED,
      payload: {
        message: 'Invalid email or password'
      }
    })).toEqual({
      ...INITIAL_STATE,
      errors: {
        message: 'Invalid email or password'
      },
      isSubmitting: false
    });
  });
});
