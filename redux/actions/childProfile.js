import { FETCH_CHILD_PROFILE } from "./actionTypes";

import instance from "./instance";

export const fetchChildProfile = () => {
  return async dispatch => {
    try {
      const response = await instance.get("profile/child/");
      const profile = response.data;
      dispatch({
        type: FETCH_CHILD_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.log("fetch profile error");
      console.error(error.response.data);
    }
  };
};
