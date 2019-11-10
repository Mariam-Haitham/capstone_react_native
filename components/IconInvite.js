import React, { Component } from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

class IconInvite extends Component {
  render() {
    return (
      <Icon
        style={{ color: "white", marginRight: 30 }}
        name="adduser"
        type="AntDesign"
        onPress={() =>
          this.props.navigation.navigate("AddScreen", {
            homeID: this.props.homeID
          })
        }
        style={{ marginLeft: 165, color: "white" }}
      />
    );
  }
}
export default withNavigation(IconInvite);