import { FETCH_FEED } from "../actions/actionTypes";

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
    default:
      return state;
  }
};
export default feedReducer;
