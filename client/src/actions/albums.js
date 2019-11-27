import axios from "axios";
import {
  ADD_RATING,
  FETCH_ALBUMS_FROM_DB,
  LOADING_TRUE,
  LOADING_FALSE,
  SELECT_ALBUM_FROM_DB
} from "./types";

export const addAlbum = (rating, text, singleAlbum) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    singleAlbum.rating = rating;
    singleAlbum.text = text;
    // const body = JSON.stringify(singleAlbum);
    const body = singleAlbum;

    const res = await axios.post("/api/albums", body, config);

    // await dispatch({
    //   type: ADD_RATING,
    //   payload: res.data
    // });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchAlbumsFromDB = () => async dispatch => {
  try {
    await dispatch({ type: LOADING_TRUE });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.get("/api/albums", config);

    await dispatch({
      type: FETCH_ALBUMS_FROM_DB,
      payload: res.data
    });
    // await dispatch({ type: LOADING_FALSE });
    await dispatch({ type: LOADING_FALSE });
  } catch (err) {
    console.log(err);
  }
};

// export const selectAlbumFromDB = id => dispatch => {
//   dispatch({
//     type: SELECT_ALBUM_FROM_DB,
//     payload: id
//   });
// };

export function selectAlbumFromDB(id) {
  return { type: SELECT_ALBUM_FROM_DB, id };
}
