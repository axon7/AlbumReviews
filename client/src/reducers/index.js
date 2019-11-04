import { combineReducers } from "redux";
import alert from "./alert";
import authentication from "./authentication";
export default combineReducers({ alert, authentication });
