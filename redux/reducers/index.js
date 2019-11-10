import { combineReducers } from "redux";

// Reducers
import authReducer from "./auth";
import feedReducer from "./feed";
import homeReducer from "./homes";
import childReducer from "./child";
import allergyReducer from "./allergy";
import profileReducer from "./userprofile";
import homeDetailReducer from "./homeDetails";

export default combineReducers({
  rootAuth: authReducer,
  rootHome: homeReducer,
  rootFeed: feedReducer,
  rootChild: childReducer,
  rootAllergy: allergyReducer,
  rootProfile: profileReducer,
  rootHomeDetai: homeDetailReducer
});
