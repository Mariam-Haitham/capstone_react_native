import { FETCH_FEED } from "./actionTypes";
import instance from "./instance";

export const fetchFeed = homeID => {
  console.log("!!!!!!!@@@@@@@@@@!!!!!!!", homeID);
  return async dispatch => {
    try {
      const response = await instance.get(`homes/${homeID}/`);
      const feed = response.data;
      dispatch({ type: FETCH_FEED, payload: feed });
    } catch (error) {
      console.error(error);
    }
  };
};
