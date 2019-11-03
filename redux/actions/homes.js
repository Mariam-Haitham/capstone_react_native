import { FETCH_HOMES } from "./actionTypes";
import instance from "./instance";

export const fetchHomes = () => {
  return async dispatch => {
    try {
      let response = await instance.get("homes/", userData);
      const homes = response.data;
      dispatch({ type: FETCH_HOMES, payload: homes });
    } catch (error) {
      console.error(error);
    }
  };
};
