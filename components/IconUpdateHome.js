import React, { Component } from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconUpdateHome extends Component {
  render() {
    return (
      <Icon
        style={{ color: "black", marginRight: 34 }}
        name="edit"
        type="AntDesign"
        onPress={() => this.props.navigation.navigate("UpdateHomeScreen")}
      />
    );
  }
}
export default withNavigation(IconUpdateHome);
