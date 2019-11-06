import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOAD_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null
};
const authentication = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      };
    case REGISTER_FAILURE:
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default authentication;
