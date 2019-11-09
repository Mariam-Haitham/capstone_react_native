//actions
import { FETCH_ALLERGY, SET_ALLERGY } from "./actionTypes";

import instance from "./instance";

export const fetchAllergies = () => {
  return async dispatch => {
    try {
      let response = await instance.get("allergies/");
      const allergies = response.data;
      dispatch({ type: FETCH_ALLERGY, payload: allergies });
    } catch (error) {
      console.log("fetch allergies error");
      console.error(error);
    }
  };
};

export const setAllergies = allergies => {
  return async dispatch => {
    await dispatch({ type: SET_ALLERGY, payload: allergies });
  };
};
