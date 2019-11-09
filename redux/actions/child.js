//actions
import { ADD_CHILD } from "./actionTypes";

import instance from "./instance";

export const addChild = (homeId, child) => {
  return async dispatch => {
    try {
      const res = await instance.post(`child/add/${homeId}/`, child);
      const newChild = res.data;
      dispatch({
        type: ADD_CHILD,
        payload: newChild
      });
    } catch (error) {
      console.log("error adding child");
      console.error(error.response.data);
    }
  };
};
