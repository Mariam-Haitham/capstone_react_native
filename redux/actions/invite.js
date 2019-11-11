//actions
import { SEND_INVITE } from "./actionTypes";

import instance from "./instance";

export const sendInvite = (homeID, email, type) => {
  return async dispatch => {
    try {
      let res = await instance.post(`invite/${homeID}/${type}/`, email);
      // let person = res.data;

      dispatch({
        type: SEND_INVITE
        // payload: { ...person, type: type }
      });
    } catch (error) {
      console.log("send invitation error");
      console.error(error);
    }
  };
};
