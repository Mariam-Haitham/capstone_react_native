import React, { Component } from "react";
// import { ImageBackground, View, Image } from "react-native";
import { Text, ListItem, Card, CardItem, Left, View } from "native-base";
// Navigation
import { withNavigation } from "react-navigation";
//components
import SideBar from "../Navigation/SideBar";

class HomesDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home"
    };
  };

  // componentDidMount() {}
  render() {
    const { home } = this.props;
    const { navigation } = this.props;
    const handlePress = () => {
      navigation.navigate("HomeDetailScreen", { homeID: home.id });
    };
    console.log("Home", home);
    return (
      <View>
        <ListItem button onPress={handlePress}>
          {/* <Card> */}
          {/* <CardItem> */}
          <Left>
            <Text>{home.name}</Text>
          </Left>
          {/* </CardItem> */}
          {/* </Card> */}
        </ListItem>
      </View>
    );
  }
}

export default withNavigation(HomesDetail);
