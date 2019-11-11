//actions
import { FETCH_FEED, POST_FEED, SET_IMAGE } from "./actionTypes";

import instance from "./instance";

export const fetchFeed = homeID => {
  return async dispatch => {
    try {
      const response = await instance.get(`homes/${homeID}/`);
      const feed = response.data;
      dispatch({ type: FETCH_FEED, payload: feed });
    } catch (error) {
      console.log("fetching feed error");
      console.error(error);
    }
  };
};

export const postToFeed = (homeID, postData) => {
  console.log("RECEIVED!!!!!!RRRR!!!", homeID, "OBJECT!!!!!!!!!!!!!", postData);
  return async dispatch => {
    try {
      await instance.post(`homes/${homeID}/`, postData);

      dispatch({ type: POST_FEED });
    } catch (error) {
      console.log("error posting feed error");
      console.error(error);
    }
  };
};

export const setImage = image => {
  console.log("RECEIVED IMG!!!!!!", image);
  return async dispatch => {
    dispatch({ type: SET_IMAGE, payload: image });
  };
};
