import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { Button, Icon, Text } from "native-base";
import { postToFeed } from "../redux/actions";
import CameraRollPicker from "./CameraRollPicker";
class PostBox extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { message: "Post to feed" };
  //   }
  state = {
    message: "Post to feed",
    children: [1],
    image: null
  };
  render() {
    let homeID = this.props.home;
    console.log("HOME!!!!!!!!!!!ID!!!!!!!!!!!", homeID);
    const handlePress = () => {
      console.log("RECEIVED IMG!!!!!!!@@@@@@@@@@@", this.props.image);
      this.setState({ image: this.props.image });
      this.props.postToFeed(homeID, {
        message: this.state.message,
        image: this.props.image,
        children: this.state.children
      });
      console.log("MSGGGGGGGGGGGGGGGGGGGGGG$$$$$$$$$$$  ", this.state);
    };
    return (
      <View>
        <TextInput
          style={{ height: 60, borderColor: "gray", borderWidth: 1 }}
          onChangeText={message => this.setState({ message })}
          value={this.state.message}
        />
        <Icon
          name="ios-attach"
          type="Ionicons"
          onPress={() => this.props.navigation.navigate("CameraRollScreen")}
        />
        <Button onPress={() => handlePress()}>
          <Text>Post</Text>
        </Button>
        {console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!", this.state.image)}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  home: state.rootHome.home,
  image: state.rootFeed.image
});
const mapDispatchToProps = dispatch => ({
  postToFeed: (postData, homeID) => dispatch(postToFeed(postData, homeID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostBox);
