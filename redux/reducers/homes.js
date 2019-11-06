import { FETCH_HOMES, ADD_HOME, SET_HOME } from "../actions/actionTypes";


const initialState = {
  homes: [],
  loading: true,
  home: ""
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
    case SET_HOME:
      return {
        ...state,
        home: payload,
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
