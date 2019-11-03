import { FETCH_HOMES, FETCH_HOME_DETAIL } from "./actionTypes";
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

export const fetchHomeDetail = homeID => {
  return async dispatch => {
    const res = await instance.get(`homes/${homeID}`);
    const home = res.data;
    dispatch({ type: FETCH_HOME_DETAIL, payload: home });
  };
};
