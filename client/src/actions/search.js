import axios from "axios";

import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS,
  FETCH_ALBUM_BY_ID,
  LOADING_TRUE,
  LOADING_FALSE
} from "./types";

export const fetchAlbums = searchTerm => async dispatch => {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=album:"${searchTerm}"`;
  dispatch({ type: LOADING_TRUE });
  try {
    const res = await axios.get(URL);
    await dispatch({
      type: FETCH_ALBUMS,
      payload: res.data
    });
    await dispatch({ type: LOADING_FALSE });
  } catch (err) {
    dispatch({ type: FETCH_ALBUMS_FAILURE });
  }
};

export const fetchAlbumById = id => async dispatch => {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
  dispatch({ type: LOADING_TRUE });

  try {
    const res = await axios.get(URL);
    await dispatch({
      type: FETCH_ALBUM_BY_ID,
      payload: res.data,
      id
    });
    await dispatch({ type: LOADING_FALSE });
  } catch (err) {
    dispatch({ type: FETCH_ALBUMS_FAILURE, error: err });
  }
};
