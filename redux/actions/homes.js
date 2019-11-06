
import { FETCH_HOMES, FETCH_HOME_DETAIL, SET_HOME } from "./actionTypes";

import instance from "./instance";

export const fetchHomes = () => {
  return async dispatch => {
    try {
      let response = await instance.get("homes/");
      const homes = response.data;
      dispatch({ type: FETCH_HOMES, payload: homes });
    } catch (error) {
      console.error(error);
    }
  };
};


export const addHome = home => {
  return async dispatch => {
    try {
      const res = await instance.post("homes/add/", home);
      const newHome = res.data;
      dispatch({
        type: ADD_HOME,
        payload: newHome
      });
    } catch (error) {
      console.error(error);
      dispatch(setErrors("Invalid input!!"));
    }
    
export const setHome = homeID => {
  return async dispatch => {
    dispatch({ type: SET_HOME, payload: homeID });

  };
};
