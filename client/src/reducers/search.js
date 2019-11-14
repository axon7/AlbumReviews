import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_PENDING,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUM_BY_ID
} from "../actions/types";

const initialstate = {
  data: [],
  loading: false,
  error: "",
  singleAlbum: ""
};
const search = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
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
