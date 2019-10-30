// import { FETCH_FEED } from "./actionTypes";
// import instance from "./instance";
// import { setErrors } from "./errors";

// export const fetchFeed = () => {
//   return async dispatch => {
//     try {
//       let response = await instance.get("feed/", userData);
//       const currentFeed = response.data;
//       dispatch({ type: FETCH_FEED, payload: currentFeed });
//     } catch (error) {
//       console.error(error);
//       dispatch(setErrors(error));
//     }
//   };
// };
