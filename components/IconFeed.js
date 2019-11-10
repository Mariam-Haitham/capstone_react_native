import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconFeed extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginRight: 40 }}
        name="ios-attach"
        type="Ionicons"
        onPress={() => this.props.navigation.navigate("PostFeedScreen")}
      />
    );
  }
}
export default withNavigation(IconFeed);
