import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import {
  Container,
  Content,
  Card,
  CardItem,
  Header,
  Left,
  Right,
  Text,
  Body,
  Button,
  Thumbnail,
  List,
  Icon,
  Title,
  ListItem
} from "native-base";

class ListOfHomes extends Component {
  render() {
    return (
      <Content padder>
        <View>
          <Text>Home Page</Text>
        </View>
      </Content>
    );
  }
}

export default ListOfHomes;

ListOfHomes.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>List Of Homes</Title>
      </Body>
      <Right />
    </Header>
  )
});
