import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
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
  componentDidMount = () => {};
  handleInvite = () => {
    console.log(this.props.navigation.getParam("homeID"));
    this.props.sendInvite(this.props.navigation.getParam("homeID"), this.state);
  };
  render() {
    const { email } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.textColumn}>
          <Text style={styles.text}>Email</Text>
          <View style={styles.rect}>
            <View style={styles.rect3Column}>
              <View style={styles.rect3}>
                <EvilIconsIcon name="user" style={styles.icon2} />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.textInput2}
                  name="email"
                  value={email}
                  onChangeText={email => this.setState({ email })}
                />
              </View>
            </View>
            <View style={styles.rect3ColumnFiller} />
            <TouchableOpacity
              onPress={() => this.handleInvite()}
              style={styles.button}
            >
              <Text style={styles.text2}>Send Invite</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    borderRadius: 5,
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
    marginLeft: 12
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
    sendInvite: (email, homeID) => dispatch(sendInvite(email, homeID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
