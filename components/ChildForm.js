import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";

import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const { height: winHeight, width: winWidth } = Dimensions.get("window");

//actions
import { connect } from "react-redux";
import { addChild } from "../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

//components
import AllergiesSelectList from "./AllergiesSelectList";

class ChildForm extends Component {
  state = {
    name: "",
    image: null,
    dob: "",
    medical_history: "",
    allergies: []
  };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  SubmitAdd = async homeId => {
    console.log("I AM HERE");
    console.log(this.state);
    await this.setState({
      image: this.props.image
    });
    await this.setState({
      allergies: this.props.checkedAllergies
    });

    this.props.addChild(homeId, this.state);
  };

  render() {
    const homeId = this.props.navigation.getParam("homeId");

    const { name, image, dob, medical_history, allergies } = this.state;

    return (
      <View>
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
                fontWeight: "bold",
                marginLeft: 34,
                fontSize: 35
              }}
            >
              Add a Child
            </Text>
            <View style={styles.rect}>
              <View style={styles.rect3Column}>
                <ScrollView style={{ height: winHeight }}>
                  <View style={styles.rect3}>
                    <TextInput
                      placeholder="Child Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.textInput2}
                      name="name"
                      value={name}
                      onChangeText={name => this.setState({ name })}
                    />
                  </View>
                  <View style={styles.rect2}>
                    <Text style={styles.textInput}>Allergies </Text>
                  </View>
                  <AllergiesSelectList />
                  <View style={styles.rect2}>
                    <Text style={styles.textInput}>Upload Image </Text>
                  </View>

                  <Icon
                    style={{
                      marginLeft: 250,
                      marginTop: -45
                    }}
                    name="ios-attach"
                    type="Ionicons"
                    onPress={() =>
                      this.props.navigation.navigate("CameraRollScreen")
                    }
                  />

                  <View style={styles.rect2}>
                    <TextInput
                      placeholder="Medical History"
                      placeholderTextColor="rgba(255,255,255,1)"
                      style={styles.textInput}
                      value={medical_history}
                      name="medical_history"
                      onChangeText={medical_history =>
                        this.setState({ medical_history })
                      }
                    />
                  </View>

                  <View style={styles.rect2}>
                    <TextInput
                      placeholder="Date of birth"
                      placeholderTextColor="rgba(255,255,255,1)"
                      style={styles.textInput}
                      value={dob}
                      name="dob"
                      onChangeText={dob => this.setState({ dob })}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => this.SubmitAdd(homeId)}
                    style={styles.container2}
                  >
                    <Text style={styles.text4}>Continue</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View style={styles.rect3ColumnFiller} />
            </View>
          </View>
          <View style={styles.textColumnFiller} />
          <View style={styles.rect4}>
            <View style={styles.button2Filler} />
            <View style={styles.text3Filler} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: winHeight,
    backgroundColor: "rgba(20,146,146,1)",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 24,
    marginLeft: 84
  },
  rect: {
    width: winWidth,
    height: winHeight,
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
    color: "white",
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
    color: "white",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  rect3Column: {
    width: 278
    // marginLeft: 12
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
    marginTop: 90,
    marginLeft: 75
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
  },
  container2: {
    width: 118,
    height: 52,
    backgroundColor: "black",
    opacity: 1,
    borderRadius: 18,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 80
  },
  text4: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  }
});

const mapStateToProps = state => {
  return {
    checkedAllergies: state.rootAllergy.checkedAllergies,
    image: state.rootChild.image
  };
};

const mapDispatchToProps = dispatch => ({
  addChild: (homeId, newChild) => dispatch(addChild(homeId, newChild))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildForm);
