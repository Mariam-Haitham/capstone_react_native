//actions
import { ADD_CHILD, SET_CHILDREN, SET_IMAGE } from "./actionTypes";

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

export const setChildren = children => {
  return async dispatch => {
    await dispatch({ type: SET_CHILDREN, payload: children });
  };
};

export const setChildImage = image => {
  return async dispatch => {
    dispatch({ type: SET_IMAGE, payload: image });
  };
};
