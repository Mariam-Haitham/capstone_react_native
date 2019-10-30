import { combineReducers } from "redux";

// Reducers
// import timeline from "./fetchFeed";
import profileReducer from "./userprofile";
import authReducer from "./auth";

export default combineReducers({
  rootProfile: profileReducer,
  authState: authReducer
  // feedState: timeline
});
