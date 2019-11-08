import { createStackNavigator } from "react-navigation-stack";

//components

import Signup from "../components/Signup";
import Profile from "../components/UserProfile";
import RegisterationForms from "../components/RegistrationForms";

import AddHome from "../components/AddHome";
import HomeDetail from "../components/HomeDetail";
import UpdateHome from "../components/UpdateHome";
import ListOfHomes from "../components/ListOfHomes";

import Feed from "../components/Feed";

import ChildDetail from "../components//ChildDetail";

import AddUser from "../components/AddUser";
import CameraRollPicker from "../components/CameraRollPicker";

const StackNav = createStackNavigator(
  {
    RegisterScreen: RegisterationForms,
    ProfileScreen: Profile,
    SignupScreen: Signup,
    ChildDetailScreen: ChildDetail,
    ListOfHomesScreen: ListOfHomes,
    FeedScreen: Feed,
    HomeDetailScreen: HomeDetail,
    AddScreen: AddUser,
    AddHomeScreen: AddHome,
    UpdateHomeScreen: UpdateHome,
    CameraRollScreen: CameraRollPicker
  },
  {
    initialRouteName: "RegisterScreen",

    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgba(20,146,146,1)",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
