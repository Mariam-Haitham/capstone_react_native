//actions
import { FETCH_ALLERGY, SET_ALLERGY } from "../actions/actionTypes";

const initialState = {
  allergies: [],
  checkedAllergies: []
};

const AllergyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALLERGY:
      return {
        ...state,
        allergies: payload
      };
    case SET_ALLERGY:
      return {
        ...state,
        checkedAllergies: payload
      };
    default:
      return state;
  }
};
export default AllergyReducer;
