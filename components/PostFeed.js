import { connect } from "react-redux";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Icon, Text } from "native-base";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

//actions
import { postToFeed } from "../redux/actions";

//components
import ChildSelectList from "./ChildSelectList";

class PostFeed extends Component {
  state = {
    message: "Post to feed",
    children: [],
    image: null
  };

  render() {
    let homeID = this.props.home;

    const handlePress = async () => {
      this.setState({ image: this.props.image });
      await this.setState(
        {
          children: this.props.checkedchildren
        },
        this.props.navigation
      );
      this.props.postToFeed(homeID, {
        message: this.state.message,
        image: this.props.image,
        children: this.state.children
      });
    };
    return (
      <View>
        <LinearGradient
          colors={["#6D6780", "#D5C6E0", "#FFFF"]}
          style={{
            width: 800,
            height: 850
          }}
        >
          <TextInput
            style={{
              height: 60,
              borderColor: "white",
              backgroundColor: "white",
              borderWidth: 1
            }}
            onChangeText={message => this.setState({ message })}
            value={this.state.message}
          />
          <Icon
            name="ios-attach"
            type="Ionicons"
            onPress={() => this.props.navigation.navigate("CameraRollScreen")}
          >
            <Text style={{ fontFamily: "Optima" }}> Attachement</Text>
          </Icon>

          <ChildSelectList />
          <Button
            success
            onPress={() => handlePress()}
            style={{ marginTop: 30, width: 130, marginLeft: 150 }}
          >
            <Text style={{ marginLeft: 35 }}>Post</Text>
          </Button>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  home: state.rootHome.home,
  image: state.rootFeed.image,
  checkedchildren: state.rootChild.checkedchildren
});

const mapDispatchToProps = dispatch => ({
  postToFeed: (postData, homeID) => dispatch(postToFeed(postData, homeID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFeed);
