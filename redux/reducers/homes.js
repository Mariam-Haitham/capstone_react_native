import { FETCH_HOMES, ADD_HOME } from "../actions/actionTypes";

const initialState = {
  homes: [],
  loading: true
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HOMES:
      return {
        ...state,
        homes: payload,
        loading: false
      };
    case ADD_HOME:
      const createdHome = payload;
      return {
        ...state,
        homes: [createdHome, ...state],
        loading: false
      };
    default:
      return state;
  }
};
export default HomeReducer;
