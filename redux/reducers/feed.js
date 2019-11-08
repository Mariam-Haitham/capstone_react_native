import { FETCH_FEED, POST_POST, SET_IMAGE } from "../actions/actionTypes";

const initialState = {
  feed: [],
  loading: true,
  image: ""
};

const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FEED:
      return {
        ...state,
        feed: payload,
        loading: false
      };
    case POST_POST:
      return state;
    case SET_IMAGE:
      return {
        ...state,
        image: payload,
        loading: false
      };
    default:
      return state;
  }
};
export default feedReducer;
