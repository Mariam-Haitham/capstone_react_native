import React, { Component } from "react";
import { connect } from "react-redux";
// import { ImageBackground, View, Image } from "react-native";
import SideBar from "../Navigation/SideBar";
import { Text, Content, Button, Drawer, Icon } from "native-base";

class ListOfHomes extends Component {
  state = {
    drawerIsOpen: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",

      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.getParam("handleDrawer")()}
        >
          {navigation.getParam("isOpen") ? (
            <Icon name="close" type="AntDesign" />
          ) : (
            <Icon name="menu" type="Feather" />
          )}
        </Button>
      )
    };
  };

  handleDrawer = async () => {
    if (this.state.drawerIsOpen) {
      this.drawer._root.close();
    } else {
      this.drawer._root.open();
    }
    await this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    this.props.navigation.setParams({ isOpen: this.state.drawerIsOpen });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });
  }
  render() {
    return (
      <>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
          panOpenMask={0.6}
          openDrawerOffset={0.4}
          onClose={this.closeDrawer}
          onOpen={this.openDrawer}
          captureGestures="open"
        >
          <Text>Hi</Text>
        </Drawer>
      </>
    );
  }
}

export default ListOfHomes;
