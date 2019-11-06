import React, { Component } from "react";
// import { ImageBackground, View, Image } from "react-native";
import { Text, ListItem, Card, CardItem, Left, View } from "native-base";
// Navigation
import { withNavigation } from "react-navigation";
//components
import SideBar from "../Navigation/SideBar";

class HomesCard extends Component {
  static navigationOptions = () => {
    return {
      title: "Home"
    };
  };
  handlePress = () => {
    const { home } = this.props;
    this.props.navigation.navigate("HomeDetailScreen", {
      homeID: home.id
    });
  };
  render() {
    const { home } = this.props;

    return (
      <View>
        <ListItem>
          <Left>
            <Text button onPress={() => this.handlePress()}>
              {home.name}
            </Text>
          </Left>
        </ListItem>
      </View>
    );
  }
}

export default withNavigation(HomesCard);
