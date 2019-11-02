import React, { Component } from "react";
import { Drawer, Text, Button } from "native-base";

//Components
import SideBar from "../Navigation/SideBar";
export default class DrawerMenu extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar />}
        panOpenMask={0.8}
        openDrawerOffset={0.7}
        onClose={this.closeDrawer}
        onOpen={this.openDrawer}
        captureGestures="open"
        side="left"
      >
        <Button onPress={this.openDrawer}>
          <Text>I am here! </Text>
        </Button>
      </Drawer>
    );
  }
}
