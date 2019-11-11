//actions
import {
  FETCH_HOMES,
  ADD_HOME,
  SET_HOME,
  SEND_INVITE
} from "../actions/actionTypes";

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
        homes: [createdHome, ...state.homes],
        loading: false
      };
    case SET_HOME:
      return {
        ...state,
        home: payload,
        loading: false
      };
    // case SEND_INVITE:
    //   return {
    //     ...state,
    //     if(payload.type==="parent"){
    //       return
    //     }

    //   };
    default:
      return state;
  }
};
export default HomeReducer;
