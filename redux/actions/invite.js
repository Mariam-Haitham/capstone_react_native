//actions
import { SEND_INVITE } from "./actionTypes";

import instance from "./instance";

export const sendInvite = (homeID, email) => {
  return async dispatch => {
    try {
      await instance.post(`invite/${homeID}/`, email);
      dispatch({
        type: SEND_INVITE
      });
    } catch (error) {
      console.log("send invitation error");
      console.error(error);
    }
  };
};
