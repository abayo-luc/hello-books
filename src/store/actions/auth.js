import axios from 'axios';
import {
  HANDLE_LOGIN,
  LOGIN_FAILED,
  RES_TYPES,
  SET_CURRENT_USER,
  LOGIN_SUCCESS

} from '../types';
import env from '../../config/.env.json';
const {
  BASE_URL,
  LOCAL_STORAGE_KEY
} = env;
const fetchCurrentUser = (token, handleError, navigate) => async dispatch => {
  try {
    const {
      data: {
        data: payload
      }
    } = await axios.get(`${BASE_URL}/users/current`, {
      headers: {
        Authorization: token
      }
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload
    });
    if (navigate) {
      navigate('/');
    }
  } catch (error) {
    const {
      response,
      message
    } = error;
    const fullMessage = response.data.errors ? response.data.errors[0] : message;
    handleError(fullMessage, {
      appearance: 'error'
    });
  }
};
const handleLogin = (data, handleError, navigate) => async dispatch => {
  const {
    email,
    password
  } = data;
  dispatch({
    type: HANDLE_LOGIN
  });
  return axios
    .post(`${BASE_URL}/users/login`, {
      email,
      password
    })
    .then(async res => {
      const {
        data: {
          token
        }
      } = res;
      await localStorage.setItem(LOCAL_STORAGE_KEY, token);
      dispatch({
        type: LOGIN_SUCCESS
      });
      dispatch(fetchCurrentUser(token, handleError, navigate));
    })
    .catch(error => {
      const {
        data,
        status
      } = error.response;
      const payload = {
        message: data.errors ? data.errors[0] : data.message,
        type: RES_TYPES[status] || 'error'
      };
      dispatch({
        type: LOGIN_FAILED,
        payload
      });
      handleError(payload.message, {
        appearance: payload.type
      });
    });
};

export default {
  handleLogin,
  fetchCurrentUser
};
