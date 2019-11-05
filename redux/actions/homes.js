import { FETCH_HOMES, FETCH_HOME_DETAIL, SET_HOME } from "./actionTypes";
import instance from "./instance";

export const fetchHomes = () => {
  return async dispatch => {
    try {
      let response = await instance.get("homes/");
      const homes = response.data;
      console.log("Home in action", homes);
      dispatch({ type: FETCH_HOMES, payload: homes });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setHome = homeID => {
  return async dispatch => {
    dispatch({ type: SET_HOME, payload: homeID });
  };
};
