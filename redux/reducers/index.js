import { combineReducers } from "redux";

// Reducers
import profileReducer from "./userprofile";
import authReducer from "./auth";
import childProfileReducer from "./childProfile";
import homeReducer from "./homes";
import feedReducer from "./feed";

export default combineReducers({
  rootProfile: profileReducer,
  rootAuth: authReducer,
  rootChildProfile: childProfileReducer,
  rootHome: homeReducer,
  rootFeed: feedReducer
});
