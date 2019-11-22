import { combineReducers } from "redux";
import alert from "./alert";
import authentication from "./authentication";
import search from "./search";
import albums from "./albums";

export default combineReducers({ alert, authentication, search, albums });
