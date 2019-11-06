import {
  FETCH_PICTURES_FAILURE,
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_SUCCESS
} from '../actions/types';

const initialstate = {
  data: [],
  loading: false,
  error: ''
};
const search = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_PICTURES_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_PICTURES_SUCCESS:
      return { ...state, data: action.payload.data };
    case FETCH_PICTURES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'error!!!!!'
      };
    default:
      return state;
  }
};

export default search;
