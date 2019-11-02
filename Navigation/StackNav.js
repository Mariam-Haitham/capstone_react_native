import { createStackNavigator } from "react-navigation-stack";

//components
import RegisterationForms from "../components/RegistrationForms";
import Profile from "../components/UserProfile";
import Signup from "../components/Signup";
import ChildProfile from "../components//ChildProfile";
import ListOfHomes from "../components/ListOfHomes";

const StackNav = createStackNavigator(
  {
    RegisterScreen: RegisterationForms,
    ProfileScreen: Profile,
    SignupScreen: Signup,
    ChildProfileScreen: ChildProfile,
    ListOfHomesScreen: ListOfHomes
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