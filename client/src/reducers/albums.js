import {
  ADD_RATING,
  FETCH_ALBUMS_FROM_DB,
  LOADING_TRUE,
  LOADING_FALSE
} from "../actions/types";

const initialstate = {
  albums: null,
  loading: true
};
const albums = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {
        ...state,
        albums: action.payload
      };
    case FETCH_ALBUMS_FROM_DB:
      return {
        ...state,
        albums: action.payload
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default albums;
