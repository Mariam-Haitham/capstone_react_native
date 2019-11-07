import { FETCH_FEED } from "../actions/actionTypes";

const initialState = {
  feeds: [],
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FEED:
      return {
        ...state,
        feeds: payload,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
