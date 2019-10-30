import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, logout } from "../redux/actions";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

class Signup extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.Background}>
          <ImageBackground
            style={styles.rect2}
            source={require("../assets/Gradient_LZGIVfZ.png")}
          >
            <View style={styles.icon8Column}>
              <MaterialCommunityIconsIcon
                name="account-circle"
                style={styles.icon8}
              />
              <Text style={styles.text3}>CREATE ACCOUNT</Text>
              <View style={styles.Form}>
                <View style={styles.NameColumn}>
                  <View style={styles.Name}>
                    <EvilIconsIcon name="user" style={styles.icon5} />
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.NameInput}
                    />
                  </View>
                  <View style={styles.Email}>
                    <EvilIconsIcon name="envelope" style={styles.icon6} />
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.EmailInput}
                    />
                  </View>
                </View>
                <View style={styles.NameColumnFiller} />
                <View style={styles.Password}>
                  <EvilIconsIcon name="lock" style={styles.icon7} />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.PasswordInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.icon8ColumnFiller} />
            <View style={styles.ContinueColumn}>
              <TouchableOpacity style={styles.Continue}>
                <Text style={styles.text2}>Continue</Text>
              </TouchableOpacity>
              <Text style={styles.text4}>Terms &amp; Conditions</Text>
            </View>
          </ImageBackground>
        </View>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="rgba(0,0,0,0)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  Background: {
    flex: 1
  },
  rect2: {
    opacity: 0.69,
    flex: 1
  },
  icon8: {
    color: "grey",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 119
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 25,
    alignSelf: "center"
  },
  Form: {
    height: 230,
    marginTop: 116
  },
  Name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  NameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  Email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  EmailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  NameColumn: {},
  NameColumnFiller: {
    flex: 1
  },
  Password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  PasswordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  icon8Column: {
    marginTop: 95,
    marginLeft: 41,
    marginRight: 41
  },
  icon8ColumnFiller: {
    flex: 1
  },
  Continue: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 60
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center"
  },
  ContinueColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

const mapStateToProps = state => ({
  user: state.authState.user
});

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, navigation) => dispatch(signup(userData, navigation))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
