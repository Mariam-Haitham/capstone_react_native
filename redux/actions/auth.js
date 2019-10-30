import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      console.log((user.exp - currentTime) / 60);
      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = async token => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      navigation.navigate("ProfileScreen");
      dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await instance.post("signup/", userData);
      dispatch(login(userData, navigation));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = navigation => {
  setAuthToken();
  navigation.navigate("RegisterScreen");
  return setCurrentUser();
};
