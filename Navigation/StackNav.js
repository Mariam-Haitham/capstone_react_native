import { createStackNavigator } from "react-navigation-stack";

//components
import RegisterationForms from "../components/RegistrationForms";
import Profile from "../components/UserProfile";
import Signup from "../components/Signup";
import ChildDetail from "../components//ChildDetail";
import ListOfHomes from "../components/ListOfHomes";
import Feed from "../components/Feed";
import HomeDetail from "../components/HomeDetail";

const StackNav = createStackNavigator(
  {
    RegisterScreen: RegisterationForms,
    ProfileScreen: Profile,
    SignupScreen: Signup,
    ChildDetailScreen: ChildDetail,
    ListOfHomesScreen: ListOfHomes,
    FeedScreen: Feed,
    HomeDetailScreen: HomeDetail
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
