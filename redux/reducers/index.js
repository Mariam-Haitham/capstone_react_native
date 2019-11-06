import { combineReducers } from "redux";

// Reducers
import authReducer from "./auth";
import feedReducer from "./feed";
import homeReducer from "./homes";
import profileReducer from "./userprofile";
import homeDetailReducer from "./homeDetails";
import childProfileReducer from "./childProfile";

export default combineReducers({
  rootAuth: authReducer,
  rootHome: homeReducer,
  rootFeed: feedReducer,
  rootProfile: profileReducer,
  rootHomeDetai: homeDetailReducer,
  rootChildProfile: childProfileReducer
});
