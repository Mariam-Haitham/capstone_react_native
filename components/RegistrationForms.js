import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { LinearGradient } from "expo-linear-gradient";

//actions
import { connect } from "react-redux";
import { login } from "../redux/actions";
import baby from "../assets/peek.png";
class RegistertionForms extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handlelogin = () => {
    this.props.login(this.state, this.props.navigation);
  };

  render() {
    if (this.props.user) {
      return this.props.navigation.replace("ListOfHomesScreen");
    }
    const { username, password } = this.state;
    return (
      <View>
        <LinearGradient
          colors={["#FED141", "#F7DD93", "#FFFF"]}
          style={{
            width: 800,
            height: 850
          }}
        >
          <View style={styles.textColumn}>
            <Image
              source={baby}
              style={{
                width: 229,
                height: 150,
                marginLeft: 60
              }}
            />

            <View style={styles.rect}>
              <View style={styles.rect3Column}>
                <View style={styles.rect3}>
                  <EvilIconsIcon name="user" style={styles.icon2} />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="darkgrey"
                    secureTextEntry={false}
                    style={styles.textInput2}
                    name="username"
                    value={username}
                    onChangeText={username => this.setState({ username })}
                  />
                </View>
                <View style={styles.rect2}>
                  <EvilIconsIcon name="lock" style={styles.icon} />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="darkgey"
                    style={styles.textInput}
                    value={password}
                    secureTextEntry
                    name="password"
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
              </View>
              <View style={styles.rect3ColumnFiller} />
              <TouchableOpacity
                onPress={() => this.handlelogin()}
                style={styles.button}
              >
                <Text style={styles.text2}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textColumnFiller} />
          <View style={styles.rect4}>
            <View style={styles.button2Filler} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ProfileScreen")}
              style={styles.Continue}
              style={styles.button2}
            >
              <View style={styles.text3Filler} />
              <Text
                style={{ paddingBottom: 30 }}
                onPress={() => this.props.navigation.navigate("SignupScreen")}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#212121",
    fontSize: 34,
    marginLeft: 80,

    fontWeight: "bold"
  },
  rect: {
    width: 303,
    height: 301,
    marginTop: 47
  },
  rect3: {
    width: 300,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 100,
    marginTop: 40,
    flexDirection: "row",
    marginLeft: 10
  },
  icon2: {
    color: "rgba(27,25,25,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput2: {
    height: 30,
    color: "black",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  rect2: {
    width: 300,
    height: 59,
    marginTop: 30,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 100,
    marginLeft: 10,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(13,12,12,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput: {
    height: 30,
    color: "black",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  rect3Column: {
    width: 278,
    marginLeft: 12
  },
  rect3ColumnFiller: {
    flex: 1
  },
  button: {
    width: 200,
    marginTop: 70,
    height: 59,
    backgroundColor: "black",
    borderRadius: 20,
    marginBottom: 53,
    marginLeft: 40,
    alignSelf: "center"
  },
  text2: {
    width: 90,
    color: "white",
    marginTop: 15,
    marginLeft: 80,
    fontSize: 17
  },
  textColumn: {
    width: 303,
    marginTop: 120,
    marginLeft: 36
  },
  textColumnFiller: {
    flex: 1
  },
  rect4: {
    width: 287,
    height: 14,
    marginBottom: 66,
    marginLeft: 32
  },
  button2Filler: {
    flex: 1
  },
  button2: {
    width: 104,
    height: 14,
    justifyContent: "center"
  }
});
const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, navigation) => dispatch(login(userData, navigation)),
    signup: (userData, navigation) => dispatch(signup(userData, navigation))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistertionForms);
