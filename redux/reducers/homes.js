import { FETCH_HOMES, FETCH_HOME_DETAIL } from "../actions/actionTypes";

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
    // case FETCH_HOME_DETAIL:
    //   return {
    //     ...state,
    //     home: payload.home,
    //     loading: false
    //   };
    default:
      return state;
  }
};
export default HomeReducer;
