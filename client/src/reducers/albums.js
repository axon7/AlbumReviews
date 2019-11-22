import { ADD_RATING } from "../actions/types";

const initialstate = {
  albums: ""
};
const search = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {
        ...state,
        albums: action.payload
      };

    default:
      return state;
  }
};

export default search;
