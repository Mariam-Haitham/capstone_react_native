//actions
import { UPDATE_HOME } from "../actions/actionTypes";

const initialState = {
  name: ""
};

const HomeDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_HOME:
      return {
        ...state,
        name: payload
      };
    default:
      return state;
  }
};
export default HomeDetailReducer;
