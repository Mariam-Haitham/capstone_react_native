import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { Button, Text, Item, Content, Icon, List, ListItem } from "native-base";
import { logout } from "../redux/actions";
class SideBar extends Component {
  render() {
    return (
      <>
        <Content style={{ backgroundColor: "white", opacity: 0.95 }}>
          <View>
            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("ListOfHomesScreen")}
              >
                <Icon name="home-assistant" type="MaterialCommunityIcons" />
                <Text> Homes </Text>
              </Button>
            </Item>

            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("ProfileScreen")}
              >
                <Icon name="user" type="EvilIcons" />
                <Text>User Profile</Text>
              </Button>
            </Item>
            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("FeedScreen")}
              >
                <Icon name="playlist-edit" type="MaterialCommunityIcons" />
                <Text>Feed</Text>
              </Button>
            </Item>
            <Item>
              <Button
                transparent
                onPress={() => this.props.logout(this.props.navigation)}
              >
                <Icon name="logout" type="AntDesign" />
                <Text>Logout</Text>
              </Button>
            </Item>
          </View>
        </Content>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(logout(navigation))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(SideBar)
);
