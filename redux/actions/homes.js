import { FETCH_HOMES } from "./actionTypes";
// import instance from "./instance";
import axios from "axios";

export const fetchHomes = () => {
  return async dispatch => {
    try {
      let response = await axios.get("http://127.0.0.1:8000//homes/", userData);
      const homes = response.data;
      dispatch({ type: FETCH_HOMES, payload: homes });
    } catch (error) {
      console.error(error);
    }
  };
};
