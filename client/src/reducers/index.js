import { combineReducers } from 'redux';
import alert from './alert';
import authentication from './authentication';
import search from './search';

export default combineReducers({ alert, authentication, search });
