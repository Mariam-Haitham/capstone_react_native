import { connect } from "react-redux";
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
import { updateHome } from "../redux/actions";

class UpdateHome extends Component {
  state = {
    name: this.props.navigation.getParam("name")
  };

  handleSubmit = () => {
    this.props.updateHome(this.props.navigation.getParam("homeID"), this.state);
  };

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container} onPress={() => this.handleSubmit()}>
        <View style={styles.textColumn}>
          <Text style={styles.text}>Name</Text>
          <View style={styles.rect}>
            <View style={styles.rect3Column}>
              <View style={styles.rect3}>
                <EvilIconsIcon name="user" style={styles.icon2} />
                <TextInput
                  placeholder="name"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.textInput2}
                  name="name"
                  value={name}
                  onChangeText={name => this.setState({ name })}
                />
              </View>
            </View>
            <View style={styles.rect3ColumnFiller} />
            <TouchableOpacity
              onPress={() => this.handleSubmit()}
              style={styles.button}
            >
              <Text style={styles.text2}>Update Home</Text>
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
  user: state.rootAuth.user,
  homes: state.rootHome.homes
});

const mapDispatchToProps = dispatch => {
  return {
    updateHome: (homeID, newName) => dispatch(updateHome(homeID, newName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateHome);