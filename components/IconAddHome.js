import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconAddHome extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginRight: 30 }}
        name="home-plus"
        type="MaterialCommunityIcons"
        onPress={() => this.props.navigation.navigate("AddHomeScreen")}
      />
    );
  }
}
export default withNavigation(IconAddHome);
