import { FETCH_FEED, POST_POST } from "../actions/actionTypes";

const initialState = {
  feed: [],
  loading: true
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
    default:
      return state;
  }
};
export default feedReducer;
