import { ADD_CHILD } from "./actionTypes";
import { fetchHomes } from "./childDetail";

import instance from "./instance";

export const addChild = (homeId, childObj, navigation) => {
  return async dispatch => {
    try {
      await instance.post(`child/add/${homeId}/`, childObj);
      dispatch({
        type: ADD_CHILD
      });
      dispatch(fetchHomes());
    } catch (error) {
      console.log("error adding child");
      console.error(error.response.data);
    }
  };
};
