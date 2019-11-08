import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { Button, Text } from "native-base";
import { postToFeed } from "../redux/actions";
class PostBox extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { message: "Post to feed" };
  //   }
  state = {
    message: "Post to feed",
    children: [1]
  };
  render() {
    let homeID = this.props.home;
    const handlePress = () => {
      console.log(this.state);
      this.props.postToFeed(
        {
          ...this.state,
          message: this.state.message,
          children: this.state.children
        },
        homeID
      );
    };
    return (
      <View>
        <TextInput
          style={{ height: 60, borderColor: "gray", borderWidth: 1 }}
          onChangeText={message => this.setState({ message })}
          value={this.state.message}
        />
        <Button onPress={() => handlePress()}>
          <Text>Post</Text>
        </Button>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  home: state.rootHome.home
});
const mapDispatchToProps = dispatch => ({
  postToFeed: (postData, homeID) => dispatch(postToFeed(postData, homeID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostBox);
