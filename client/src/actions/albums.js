import axios from "axios";
import { ADD_RATING } from "./types";

export const addAlbum = (rating, singleAlbum) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    singleAlbum.rating = rating;
    const body = JSON.stringify(singleAlbum);

    console.log(singleAlbum);
    const res = await axios.post("/api/albums", body, config);

    await dispatch({
      type: ADD_RATING,
      payload: res.data
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
