import axios from "axios";

import {
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_PENDING,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUM_BY_ID
} from "./types";

export const fetchAlbums = searchTerm => async dispatch => {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=album:"${searchTerm}"`;
  dispatch({ type: FETCH_ALBUMS_PENDING });
  try {
    const res = await axios.get(URL);
    dispatch({
      type: FETCH_ALBUMS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: FETCH_ALBUMS_FAILURE });
  }
};

export const fetchAlbumById = id => async dispatch => {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
  dispatch({ type: FETCH_ALBUMS_PENDING });

  try {
    const res = await axios.get(URL);
    console.log(res.data);
    dispatch({
      type: FETCH_ALBUM_BY_ID,
      payload: res.data,
      id
    });
  } catch (err) {
    dispatch({ type: FETCH_ALBUMS_FAILURE, error: err });
  }
};
