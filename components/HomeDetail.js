import React, { Component } from "react";
import { connect } from "react-redux";

// // NativeBase Components
import {
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Content
} from "native-base";

class HomeDetail extends Component {
  render() {
    const homeId = this.props.navigation.getParam("homeID");
    const home = homes.find(home => homeId === home.id);

    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>{home.name + "\n"}</Text>
            </Left>
            <Body />
          </ListItem>
        </List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  homes: state.homesReducer.homes
});
export default connect(mapStateToProps(HomeDetail));

Home.navigationOptions = ({ navigation }) => {
  const homeId = navigation.getParam("homeID");
  const home = this.props.homes.find(home => homeId === home.id);
  return {
    title: home.name
  };
};
