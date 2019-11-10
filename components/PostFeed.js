import { connect } from "react-redux";
import React, { Component } from "react";

import { TextInput, View } from "react-native";
import { Button, Icon, Text } from "native-base";

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
      await this.setState({
        children: this.props.checkedchildren
      });
      this.props.postToFeed(homeID, {
        message: this.state.message,
        image: this.props.image,
        children: this.state.children
      });
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
        <ChildSelectList />
        <Button onPress={() => handlePress()}>
          <Text>Post</Text>
        </Button>
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
