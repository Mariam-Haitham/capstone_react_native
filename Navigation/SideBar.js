import { connect } from "react-redux";
import React, { Component } from "react";

import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { Button, Text, Item, Content, Icon } from "native-base";

//actions
import { logout } from "../redux/actions";

class SideBar extends Component {
  HandleChange = async () => {
    this.props.logout();
    this.props.navigation.push("RegisterScreen");
  };

  render() {
    let homeID = this.props.home;

    return (
      <>
        <Content style={{ backgroundColor: "white", opacity: 0.95 }}>
          <View>
            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("ListOfHomesScreen")}
              >
                <Icon
                  name="home-assistant"
                  type="MaterialCommunityIcons"
                  style={{ color: "black" }}
                />
                <Text style={{ color: "black" }}> Homes </Text>
              </Button>
            </Item>

            {/* <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("ProfileScreen")}
              >
                <Icon name="user" type="EvilIcons" style={{ color: "black" }} />
                <Text style={{ color: "black" }}>User Profile</Text>
              </Button>
            </Item> */}
            {!!this.props.home && (
              <Item>
                <Button
                  transparent
                  onPress={() =>
                    this.props.navigation.push("FeedScreen", { homeID: homeID })
                  }
                >
                  <Icon
                    name="playlist-edit"
                    type="MaterialCommunityIcons"
                    style={{ color: "black" }}
                  />
                  <Text style={{ color: "black" }}>Feed</Text>
                </Button>
              </Item>
            )}
            <Item>
              <Button transparent onPress={() => this.HandleChange()}>
                <Icon
                  name="logout"
                  type="AntDesign"
                  style={{ color: "black" }}
                />
                <Text style={{ color: "black" }}>Logout</Text>
              </Button>
            </Item>
          </View>
        </Content>
      </>
    );
  }
}
const mapStateToProps = state => ({
  home: state.rootHome.home
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
