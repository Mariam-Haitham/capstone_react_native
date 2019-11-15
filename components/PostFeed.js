import { connect } from "react-redux";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Icon, Text, CardItem } from "native-base";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
//actions
import { postToFeed } from "../redux/actions";

//components
import ChildSelectList from "./ChildSelectList";

class PostFeed extends Component {
  state = {
    message: "",
    children: [],
    image: null
  };

  render() {
    let homeID = this.props.home;

    const handlePress = async () => {
      this.setState({ image: this.props.image });
      await this.setState({
        children: this.props.checkedchildren
      });
      this.props.postToFeed(homeID, {
        message: this.state.message,
        image: this.props.image,
        children: this.state.children
      });
      this.props.navigation.goBack();
    };
    return (
      <View>
        <View>
          <LinearGradient
            colors={["#FED141", "#FCF1D8", "#FFFF"]}
            style={{
              width: 800,
              height: 850
            }}
          >
            <View style={styles.Form}>
              <View style={styles.UsernameColumn}>
                <Text
                  style={{
                    fontFamily: "Optima",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 50,
                    marginLeft: 55
                  }}
                >
                  Upload A Post
                </Text>
                <View style={styles.Username}>
                  <Icon name="message1" type="AntDesign" style={styles.icon2} />
                  <TextInput
                    onChangeText={message => this.setState({ message })}
                    value={this.state.message}
                    style={styles.UsernameInput}
                    placeholder="POST A FEED"
                    placeholderTextColor="black"
                  />
                </View>
                <View style={styles.Password}>
                  <Text
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.PasswordInput}
                  >
                    Attachement {"                        "}
                    <Icon
                      name="ios-attach"
                      type="Ionicons"
                      onPress={() =>
                        this.props.navigation.navigate("CameraRollScreen")
                      }
                      style={{ marginTop: 30 }}
                    />
                  </Text>
                </View>
                <CardItem style={{ marginTop: 20, backgroundColor: "#FAE7B7" }}>
                  <Text style={{ fontFamily: "Optima", fontWeight: "bold" }}>
                    {" "}
                    Tag A child
                  </Text>
                </CardItem>
                <ChildSelectList />
              </View>
              <View style={styles.UsernameColumnFiller} />
              <Button
                success
                onPress={() => handlePress()}
                style={{ marginTop: 90 }}
              >
                <Text style={{ marginLeft: 100 }}>post</Text>
              </Button>
            </View>
          </LinearGradient>
        </View>

        <StatusBar
          animated={false}
          barStyle="light-content"
          hidden={false}
          backgroundColor="rgba(0,0,0,0)"
        />
      </View>
      // <View>
      //   <LinearGradient
      //     colors={["#6D6780", "#D5C6E0", "#FFFF"]}
      //     style={{
      //       width: 800,
      //       height: 850
      //     }}
      //   >
      //     <TextInput
      //       style={{
      //         height: 60,
      //         borderColor: "white",
      //         backgroundColor: "white",
      //         borderWidth: 1
      //       }}
      //       onChangeText={message => this.setState({ message })}
      //       value={this.state.message}
      //     />
      //     <Icon
      //       name="ios-attach"
      //       type="Ionicons"
      //       onPress={() => this.props.navigation.navigate("CameraRollScreen")}
      //     >
      //       <Text style={{ fontFamily: "Optima" }}> Attachement</Text>
      //     </Icon>

      //     <ChildSelectList />
      //     <Button
      //       success
      //       onPress={() => handlePress()}
      //       style={{ marginTop: 30, width: 130, marginLeft: 150 }}
      //     >
      //       <Text style={{ marginLeft: 35 }}>Post</Text>
      //     </Button>
      //   </LinearGradient>
      // </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  home: state.rootHome.home,
  image: state.rootFeed.image,
  checkedchildren: state.rootChild.checkedchildren
});

const mapDispatchToProps = dispatch => ({
  postToFeed: (postData, homeID) => dispatch(postToFeed(postData, homeID))
});

const styles = StyleSheet.create({
  rect: {
    opacity: 0.69,
    flex: 1
  },
  rect_imageStyle: {},
  Form: {
    width: 278,
    height: 230,
    marginTop: 187,
    marginRight: 400,
    alignSelf: "center"
  },
  Username: {
    width: 278,
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon2: {
    color: "black",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15
  },
  UsernameInput: {
    height: 30,
    color: "black",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  Password: {
    width: 278,
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    marginTop: 27
  },
  PasswordInput: {
    height: 30,
    color: "black",
    marginTop: 7,
    marginLeft: 25
  },
  UsernameColumn: {
    width: 278
  },
  UsernameColumnFiller: {
    flex: 1
  },
  button: {
    width: 278,
    height: 59,
    marginTop: 45,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    alignSelf: "center"
  },
  text2: {
    width: 30,
    height: 14,
    color: "rgba(255,255,255,1)",
    marginTop: 23,
    marginLeft: 120
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFeed);
