import { FETCH_PROFILE } from "./actionTypes";

import instance from "./instance";

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const response = await instance.get("profile/");
      const profile = response.data;
      dispatch({
        type: FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.log("fetch profile error");
      console.error(error.response.data);
    }
  };
};
