import React, { Component } from "react";
import HomeScreen from "./Home";
import ChildScreen from "./ChildProfile";
import UserProfile from "./UserProfile";
import SideBar from "./SideBar";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Child: { screen: ChildScreen },
    Profile: { screen: UserProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
