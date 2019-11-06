//actions
import { FETCH_HOMES, ADD_HOME, SET_HOME } from "./actionTypes";

import instance from "./instance";

export const fetchHomes = () => {
  return async dispatch => {
    try {
      let response = await instance.get("homes/");
      const homes = response.data;
      dispatch({ type: FETCH_HOMES, payload: homes });
    } catch (error) {
      console.log("fetch homes error");
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
      console.log("add home error");
      console.error(error);
    }
  };
};

export const setHome = homeID => {
  return async dispatch => {
    dispatch({ type: SET_HOME, payload: homeID });
  };
};
