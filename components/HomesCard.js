import React, { Component } from "react";
// import { ImageBackground, View, Image } from "react-native";
import { Text, ListItem, Card, CardItem, Left, View } from "native-base";
// Navigation
import { withNavigation } from "react-navigation";
//components
import SideBar from "../Navigation/SideBar";
//actions
import { setHome } from "../redux/actions";
import { connect } from "react-redux";

class HomesCard extends Component {
  static navigationOptions = () => {
    return {
      title: "Home"
    };
  };
  handlePress = () => {
    const { home } = this.props;
    this.props.setHome(home.id);
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
const mapDispatchToProps = dispatch => ({
  setHome: homeID => dispatch(setHome(homeID))
});
export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(HomesCard)
);
