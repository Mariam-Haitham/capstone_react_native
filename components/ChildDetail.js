import { connect } from "react-redux";
import React, { Component } from "react";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";

//actions
import { logout } from "../redux/actions";

const ChildDetail = ({ child }) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header></CardItem>
          <CardItem key={child.id}>
            <Body>
              <Text>Baby’s Name: {child.name}</Text>
              <Text>medical history {child.medical_history}</Text>
              <Text>
                {" "}
                Allergies:{" "}
                {child.allergies.map(allergy => (
                  <Text>{allergy.name}</Text>
                ))}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Button
              bordered
              danger
              onClick={() => this.props.logout(this.props.navigation)}
            >
              <Text>Logout</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state, OwnProps) => {
  const childId = OwnProps.navigation.getParam("childId");
  const homeId = OwnProps.navigation.getParam("homeID");
  const child = state.rootHome.homes
    .find(home => +homeId === home.id)
    .children.find(child => child.id === +childId);
  return {
    child
  };
};

const mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(logout(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildDetail);
