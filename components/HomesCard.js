import React, { Component } from "react";
// import { ImageBackground, View, Image } from "react-native";
import { Text, ListItem, Card, CardItem, Left, View, Icon } from "native-base";
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
      <View style={{ color: "#D8CBE2" }}>
        <ListItem>
          <CardItem>
            <Left>
              <Text
                button
                onPress={() => this.handlePress()}
                style={{
                  color: "#212121",
                  fontFamily: "Optima"
                }}
              >
                {home.name}
              </Text>
            </Left>
          </CardItem>
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
