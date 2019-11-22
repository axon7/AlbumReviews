import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUM_BY_ID,
  LOADING_TRUE,
  LOADING_FALSE,
  FETCH_ALBUMS
} from "../actions/types";

const initialstate = {
  data: [],
  loading: false,
  error: "",
  singleAlbum: ""
};
const search = (state = initialstate, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALBUMS:
      return {
        ...state,
        data: action.payload.data
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false
      };
    case FETCH_ALBUM_BY_ID:
      return {
        ...state,
        singleAlbum: action.payload,
        id: action.id
      };
    default:
      return state;
  }
};

export default search;
