import * as actionTypes from "../actions/actionTypes";

const initialState = {
  home: {},
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_DETAIL:
      return {
        ...state,
        home: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
