//actions
import { SET_CHILDREN, SET_IMAGE } from "../actions/actionTypes";

const initialState = {
  checkedchildren: [],
  image: ""
};

const childReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHILDREN:
      return {
        ...state,
        checkedchildren: payload
      };
    case SET_IMAGE:
      return {
        ...state,
        image: payload
      };
    default:
      return state;
  }
};
export default childReducer;
