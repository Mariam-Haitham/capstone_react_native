import { combineReducers } from "redux";

// Reducers
import profileReducer from "./userprofile";
import authReducer from "./auth";
import childProfileReducer from "./childProfile";
import HomeReducer from "./homes";
import homedetail from "./homedetail";

export default combineReducers({
  rootProfile: profileReducer,
  authState: authReducer,
  childProfile: childProfileReducer,
  homesReducer: HomeReducer,
  homedetailReducer: homedetail
});
