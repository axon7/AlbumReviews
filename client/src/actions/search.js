import axios from 'axios';

import {
  FETCH_PICTURES_FAILURE,
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_SUCCESS
} from './types';

export const fetchAlbums = searchTerm => async dispatch => {
  const URL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=album:"${searchTerm}"`;
  dispatch({ type: FETCH_PICTURES_PENDING });
  try {
    const res = await axios.get(URL);
    dispatch({
      type: FETCH_PICTURES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: FETCH_PICTURES_FAILURE });
  }
};
