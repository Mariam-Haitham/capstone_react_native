import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, View } from "react-native";
import { NavigationActions, withNavigation } from "react-navigation";
import { Button, Text, Item, Content, Icon, List, ListItem } from "native-base";
class SideBar extends Component {
  //   navigateToScreen = route => () => {
  //     const navigateAction = NavigationActions.navigate({
  //       routeName: route
  //     });
  //     this.props.navigation.dispatch(navigateAction);
  //   };
  render() {
    return (
      <>
        <Content style={{ backgroundColor: "#16171f", opacity: 0.95 }}>
          <View>
            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("ListOfHomesScreen")}
              >
                <Icon name="back" type="Entypo" />
                <Text> List of Homes </Text>
              </Button>
            </Item>

            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("UserProfileScreen")}
              >
                <Icon name="user-edit" type="FontAwesome5" />
                <Text>User Profile</Text>
              </Button>
            </Item>
          </View>
        </Content>
      </>
    );
  }
}

// SideBar.propTypes = {
//   navigation: PropTypes.object
// };

export default withNavigation(SideBar);
