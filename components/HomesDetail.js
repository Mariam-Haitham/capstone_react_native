import React, { Component } from "react";
// import { ImageBackground, View, Image } from "react-native";
import { Text, Button, Drawer, Icon } from "native-base";
// Navigation
import { withNavigation } from "react-navigation";
//components
import SideBar from "../Navigation/SideBar";

class HomesDetail extends Component {
  state = {
    drawerIsOpen: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home",

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
    const { home } = this.props;
    const { navigation } = this.props;
    const handlePress = () => {
      navigation.navigate("HomeDetailScreen", { homeID: home.id });
    };
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
          <Text>Homes Detail</Text>
          <ListItem button onPress={handlePress}>
            <Card>
              <CardItem>
                <Left>
                  <Text>{home.name}</Text>
                </Left>
              </CardItem>
              e
            </Card>
          </ListItem>
        </Drawer>
      </>
    );
  }
}

export default withNavigation(HomesDetail);
