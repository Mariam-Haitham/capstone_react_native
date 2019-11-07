import { combineReducers } from "redux";

// Reducers
import profileReducer from "./userprofile";
import authReducer from "./auth";

import HomeReducer from "./homes";

export default combineReducers({
  rootProfile: profileReducer,
  authState: authReducer,
  homesReducer: HomeReducer
});
