import { combineReducers } from "redux";

// Reducers
import authReducer from "./auth";
import feedReducer from "./feed";
import homeReducer from "./homes";
import allergyReducer from "./allergy";
import profileReducer from "./userprofile";
import homeDetailReducer from "./homeDetails";

export default combineReducers({
  rootAuth: authReducer,
  rootHome: homeReducer,
  rootFeed: feedReducer,
  rootAllergy: allergyReducer,
  rootProfile: profileReducer,
  rootHomeDetai: homeDetailReducer
});
