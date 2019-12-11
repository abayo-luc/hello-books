import {
  HANDLE_LOGIN,
  LOGIN_FAILED,
  SET_CURRENT_USER,
  LOGIN_SUCCESS
} from '../types';

const INITIAL_STATE = {
  currentUser: null,
  isSubmitting: false,
  errors: null,
  success: false
};

export default (state = INITIAL_STATE, {
  type,
  payload
}) => {
  switch (type) {
    case HANDLE_LOGIN:
      return {
        ...state,
        isSubmitting: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isSubmitting: false,
        currentUser: payload,
        errors: null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isSubmitting: false,
        errors: payload
      };
    default:
      return state;
  }
};
