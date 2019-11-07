import { FETCH_CHILD_DETAIL } from "./actionTypes";

import instance from "./instance";

export const fetchChildDetail = () => {
  return async dispatch => {
    try {
      const response = await instance.get("child/");
      const profile = response.data;
      dispatch({
        type: FETCH_CHILD_DETAIL,
        payload: profile
      });
    } catch (error) {
      console.log("fetch detail child error");
      console.error(error.response.data);
    }
  };
};
