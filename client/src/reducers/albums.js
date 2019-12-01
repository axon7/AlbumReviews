import {
  ADD_RATING,
  FETCH_ALBUMS_FROM_DB,
  LOADING_TRUE,
  LOADING_FALSE,
  SELECT_ALBUM_FROM_DB
} from "../actions/types";

const initialstate = {
  albums: [],
  loading: true,
  selectedAlbum: null
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
    case SELECT_ALBUM_FROM_DB:
      // let ajdi = action.id;
      let filtered = state.albums.filter(item => {
        return item._id === action.id;
      });
      return {
        ...state,
        selectedAlbum: filtered[0]
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
