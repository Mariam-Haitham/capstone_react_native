import { FETCH_HOMES } from "../actions/actionTypes";

const initialState = {
  homes: [],
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HOMES:
      return {
        ...state,
        homes: payload,
        loading: false
      };
    default:
      return state;
  }
};
export default reducer;
