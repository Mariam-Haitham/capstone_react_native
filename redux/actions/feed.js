//actions
import { FETCH_FEED, POST_FEED } from "./actionTypes";

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

export const postToFeed = (postData, homeID) => {
  return async dispatch => {
    try {
      await instance.post(`homes/${homeID}/`, postData);
      dispatch({ type: POST_FEED });
    } catch (error) {
      console.log("posting feed error");
      console.error(error.response.data);
    }
  };
};
