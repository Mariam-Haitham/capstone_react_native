import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";

class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>User Profile </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Full Name: </Text>
                <Text>Email:</Text>
                <Text>Phone Number #1: </Text>
                <Text>Phone Number #2: </Text>
                <Text>Bio: </Text>
              </Body>
              <Button
                bordered
                danger
                onPress={() => this.props.navigation.navigate("HomeScreen")}
              >
                <Text>Home</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Profile;
