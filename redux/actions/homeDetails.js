//actions
import { UPDATE_HOME } from "./actionTypes";

import instance from "./instance";

export const updateHome = (homeID, newName) => {
  return async dispatch => {
    try {
      const res = await instance.put(`homes/${homeID}/`, newName);
      const updatedHome = res.data;
      dispatch({
        type: UPDATE_HOME,
        payload: updatedHome
      });
    } catch (error) {
      console.log("update home error");
      console.error(error);
    }
  };
};
