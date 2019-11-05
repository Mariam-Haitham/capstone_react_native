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
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  render() {
    const { first_name, last_name, email, password } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.Background}>
          <ImageBackground
            style={styles.rect2}
            source={require("../assets/Gradient_LZGIVfZ.png")}
          >
            <View style={styles.text3StackColumn}>
              <View style={styles.text3Stack}>
                <Text style={styles.text3}>CREATE ACCOUNT</Text>
                <MaterialCommunityIconsIcon
                  name="account-circle"
                  style={styles.icon9}
                />
              </View>
              <View style={styles.Form}>
                <View style={styles.Name}>
                  <EvilIconsIcon name="user" style={styles.icon5} />
                  <View style={styles.NameInputStack}>
                    <TextInput
                      placeholder="First Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      autoCapitalize="false"
                      style={styles.NameInput}
                      value={first_name}
                      onChangeText={first_name =>
                        this.setState({ first_name: first_name })
                      }
                    />
                    <View style={styles.rect4} />
                  </View>
                </View>
                <View style={styles.rect3}>
                  <View style={styles.icon8Row}>
                    <EvilIconsIcon name="user" style={styles.icon8} />
                    <Text style={styles.text5} />
                  </View>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    autoCapitalize="false"
                    style={styles.textInput}
                    value={last_name}
                    onChangeText={last_name =>
                      this.setState({ last_name: last_name })
                    }
                  />
                </View>
                <View style={styles.rect5}>
                  <EvilIconsIcon name="envelope" style={styles.icon10} />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.textInput2}
                    value={email}
                    onChangeText={email => this.setState({ email: email })}
                  />
                </View>
                <View style={styles.Email}>
                  <EvilIconsIcon name="lock" style={styles.icon6} />
                  <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    autoCapitalize="false"
                    style={styles.EmailInput}
                    value={password}
                    onChangeText={password =>
                      this.setState({ password: password })
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.text3StackColumnFiller} />
            <TouchableOpacity
              style={styles.Continue}
              onPress={() =>
                this.props.signup(
                  { ...this.state, username: this.state.email },
                  this.props.navigation
                )
              }
            >
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
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
    backgroundColor: "rgba(73,225,207,1)"
  },
  Background: {
    flex: 1
  },
  rect2: {
    opacity: 0.69,
    flex: 1
  },
  text3: {
    top: 66,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  icon9: {
    top: 0,
    left: 87,
    position: "absolute",
    color: "rgba(27,25,25,1)",
    fontSize: 40,
    width: 90,
    height: 90
  },
  text3Stack: {
    width: 215,
    height: 90,
    marginLeft: 23
  },
  Form: {
    width: 278,
    height: 345,
    marginTop: 49
  },
  Name: {
    width: 278,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "center"
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
    left: 0,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 14,
    top: 0
  },
  rect4: {
    top: 15,
    left: 28,
    width: 1,
    height: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  NameInputStack: {
    height: 30,
    flex: 1,
    marginRight: 14,
    marginLeft: 16,
    marginTop: 14
  },
  rect3: {
    width: 277,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 1
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33
  },
  text5: {
    color: "#121212",
    // fontFamily: "roboto-regular",
    marginLeft: 6,
    marginTop: 2
  },
  icon8Row: {
    height: 33,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 13
  },
  textInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 7,
    alignSelf: "center"
  },
  rect5: {
    width: 277,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 1
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  textInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    alignSelf: "center"
  },
  Email: {
    width: 278,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 35,
    alignSelf: "center"
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
  text3StackColumn: {
    width: 278,
    marginTop: 94,
    marginLeft: 57
  },
  text3StackColumnFiller: {
    flex: 1
  },
  Continue: {
    width: 293,
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 138,
    alignSelf: "center"
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
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
