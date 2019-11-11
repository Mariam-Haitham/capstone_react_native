import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { Container, Header, Content, Button, Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
//actions
import { connect } from "react-redux";
import { sendInvite } from "../redux/actions";
class AddUser extends Component {
  state = {
    email: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };
  // componentDidMount = async () => {
  //   if (this.props.user) {
  //     await this.props.sendInvite(
  //       this.props.navigation.getParam("homeID"),
  //       this.state,
  //       "parent"
  //     ),
  //       await this.props.sendInvite(
  //         this.props.navigation.getParam("homeID"),
  //         this.state,
  //         "caretaker"
  //       );
  //   }
  // };

  // componentDidUpdate() {
  //   clearInterval(this.interval);
  //   this.interval = setInterval(() => {
  //     this.props.sendInvite(
  //       this.props.navigation.getParam("homeID"),
  //       this.state,
  //       "parent"
  //     );
  //     this.props.sendInvite(
  //       this.props.navigation.getParam("homeID"),
  //       this.state,
  //       "caretaker"
  //     );
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handlePress(homeID, email, role) {
    this.props.sendInvite(homeID, email, role);
    this.props.navigation.goBack();
  }
  render() {
    const { email } = this.state;

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#6D6780", "#D5C6E0", "#FFFF"]}
          style={{
            width: 800,
            height: 850
          }}
        >
          <View style={styles.textColumn}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 30
              }}
            >
              Send An Email Invitation
            </Text>
            <View style={styles.rect}>
              <View style={styles.rect3Column}>
                <View style={styles.rect3}>
                  <Icon
                    name="email-outline"
                    type="MaterialCommunityIcons"
                    style={styles.icon2}
                  />
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    name="email"
                    style={{ marginLeft: 10 }}
                    value={email}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
              </View>
              <View />
              <TouchableOpacity>
                <Button
                  dark
                  style={{
                    width: 160,
                    borderRadius: 10,
                    marginLeft: 90,
                    marginTop: 65
                  }}
                  onPress={() =>
                    this.handlePress(
                      this.props.navigation.getParam("homeID"),
                      this.state,
                      "parent"
                    )
                  }
                >
                  <Text style={{ color: "white", marginLeft: 35 }}>
                    Invite Parent
                  </Text>
                </Button>
              </TouchableOpacity>
              <TouchableOpacity>
                <Button
                  dark
                  style={{
                    width: 160,
                    borderRadius: 10,
                    marginLeft: 90,
                    marginTop: 40
                  }}
                  onPress={() =>
                    this.handlePress(
                      this.props.navigation.getParam("homeID"),
                      this.state,
                      "caretaker"
                    )
                  }
                >
                  <Text style={{ color: "white", marginLeft: 30 }}>
                    Invite Caretaker
                  </Text>
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,146,146,1)"
  },
  text: {
    color: "black",
    fontSize: 24,
    marginLeft: 84
  },
  rect: {
    width: 303,
    height: 301,
    marginTop: 47
  },
  rect3: {
    width: 278,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 100,
    flexDirection: "row"
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
    width: 278,
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 32
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
    marginLeft: 35
  },
  rect3ColumnFiller: {
    flex: 1
  },
  button: {
    width: 303,
    height: 59,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 5,
    marginBottom: 53,
    alignSelf: "center"
  },
  text2: {
    width: 78,
    color: "white",
    marginTop: 23,
    marginLeft: 131
  },
  textColumn: {
    width: 303,
    marginTop: 160,
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
    height: 14
  },
  text3Filler: {
    flex: 1
  },
  text3: {
    color: "rgba(25,23,23,0.5)"
  }
});
const mapStateToProps = state => ({
  user: state.rootAuth.user
});
const mapDispatchToProps = dispatch => {
  return {
    sendInvite: (homeID, email, type) =>
      dispatch(sendInvite(homeID, email, type))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
