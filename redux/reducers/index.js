import { combineReducers } from "redux";

// Reducers
// import timeline from "./fetchFeed";
import profileReducer from "./userprofile";
import authReducer from "./auth";
import childProfileReducer from "./childProfile";
import homes from "./homes";

export default combineReducers({
  rootProfile: profileReducer,
  authState: authReducer,
  childProfile: childProfileReducer,
  homes: homes
  // feedState: timeline
});
