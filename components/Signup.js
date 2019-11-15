import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../redux/actions";
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
import { LinearGradient } from "expo-linear-gradient";

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
      <View>
        <LinearGradient
          colors={["#FED141", "#F7DD93", "#FFFF"]}
          style={{
            width: 800,
            height: 850
          }}
        >
          <View>
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
                      placeholderTextColor="darkgrey"
                      secureTextEntry={false}
                      autoCapitalize="false"
                      value={first_name}
                      style={{ marginTop: 5 }}
                      onChangeText={first_name =>
                        this.setState({ first_name: first_name })
                      }
                    />
                  </View>
                </View>
                <View style={styles.rect3}>
                  <View style={styles.icon8Row}>
                    <EvilIconsIcon name="user" style={styles.icon8} />
                  </View>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="darkgrey"
                    secureTextEntry={false}
                    style={{ marginLeft: 20 }}
                    autoCapitalize="false"
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
                    placeholderTextColor="darkgrey"
                    secureTextEntry={false}
                    style={{ marginLeft: 20 }}
                    value={email}
                    onChangeText={email => this.setState({ email: email })}
                  />
                </View>
                <View style={styles.Email}>
                  <EvilIconsIcon name="lock" style={styles.icon6} />
                  <TextInput
                    placeholder="password"
                    placeholderTextColor="darkgrey"
                    secureTextEntry={true}
                    autoCapitalize="false"
                    style={{ marginLeft: 20 }}
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
          </View>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="rgba(0,0,0,0)"
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rect2: {
    opacity: 0.69,
    flex: 1
  },
  text3: {
    top: 66,
    left: 0,
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center"
  },
  icon9: {
    top: 0,
    left: 87,
    position: "absolute",
    color: "black",
    fontSize: 40,
    marginLeft: 10,
    width: 90,
    height: 90
  },
  text3Stack: {
    width: 250,
    height: 90,
    marginLeft: 35
  },
  Form: {
    width: 278,
    height: 345,
    marginTop: 60

    // marginLeft: 15
  },
  Name: {
    width: 300,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 100,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 25,
    alignSelf: "center"
  },
  icon5: {
    color: "black",
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
    marginRight: 30,
    marginLeft: 16,
    marginTop: 14
  },
  rect3: {
    width: 300,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 100,
    flexDirection: "row",
    marginTop: 17
  },
  icon8: {
    color: "black",
    fontSize: 33,
    width: 33,
    height: 33
  },
  text5: {
    color: "#121212",

    marginRight: 26,
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
    color: "darkgrey",
    fontSize: 14,
    flex: 1,
    marginRight: 40,
    marginLeft: 7,
    alignSelf: "center"
  },
  rect5: {
    width: 300,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 100,
    flexDirection: "row",
    marginTop: 17
  },
  icon10: {
    color: "black",
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
    width: 300,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 100,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 15,
    alignSelf: "center"
  },
  icon6: {
    color: "black",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  EmailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 57,
    marginLeft: 13,
    marginTop: 14
  },
  text3StackColumn: {
    width: 300,
    marginTop: 94,
    marginLeft: 57
  },
  text3StackColumnFiller: {
    flex: 1
  },
  Continue: {
    width: 200,
    height: 55,
    backgroundColor: "black",
    opacity: 1,
    borderRadius: 20,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 30,
    marginRight: 390,
    alignSelf: "center"
  },
  text2: {
    width: 66,
    color: "white",
    alignSelf: "center"
  }
});
const mapStateToProps = state => ({
  user: state.rootAuth.user
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
