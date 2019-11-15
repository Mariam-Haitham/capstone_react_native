import { connect } from "react-redux";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { Icon, Button } from "native-base";
//actions
import { updateHome } from "../redux/actions";

class UpdateHome extends Component {
  state = {
    name: this.props.navigation.getParam("name")
  };
  componentDidMount = async () => {
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });

    if (this.props.user) {
      await this.props.updateHome(
        this.props.navigation.getParam("homeID"),
        this.state
      );
    }
  };

  componentDidUpdate() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.props.updateHome(
        this.props.navigation.getParam("homeID"),
        this.state
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleSubmit = () => {
    this.props.updateHome(this.props.navigation.getParam("homeID"), this.state);
    this.props.navigation.goBack();
  };

  render() {
    const { name } = this.state;

    return (
      <View style={styles.container} onPress={() => this.handleSubmit()}>
        <LinearGradient
          colors={["#FED141", "#FCF1D8", "#FCF1D8"]}
          style={{
            width: 800,
            height: 850
          }}
        >
          <View style={styles.textColumn}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: 50
              }}
            >
              Edit Home Name
            </Text>
            <View style={styles.rect}>
              <View style={styles.rect3Column}>
                <View style={styles.rect3}>
                  <Icon name="home" type="Octicons" style={styles.icon2} />
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
              <TouchableOpacity>
                <Button
                  dark
                  onPress={() => this.handleSubmit()}
                  style={{
                    marginLeft: 90,
                    width: 150,
                    marginTop: 65,
                    marginRight: 90,
                    borderRadius: 10
                  }}
                >
                  <Text style={{ color: "white", marginLeft: 30 }}>
                    Update Home
                  </Text>
                </Button>
              </TouchableOpacity>
              <View style={styles.rect3ColumnFiller} />
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
    opacity: 100,
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
    marginLeft: 20,
    marginTop: 14
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
    marginLeft: 12,
    marginLeft: 30
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
