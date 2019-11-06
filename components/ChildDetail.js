import { connect } from "react-redux";
import React, { Component } from "react";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Image,
  Button,
  Thumbnail
} from "native-base";
//components
import Loading from "./Loading";

const ChildDetail = ({ child }) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header></CardItem>
          <CardItem key={child.id}>
            <Body>
              <Thumbnail source={{ uri: child.image }} />
              <Text>Baby’s Name: {child.name}</Text>
              <Text>Age: {child.age}</Text>
              <Text>Date Of Birth: {child.dob}</Text>
              <Text>medical history {child.medical_history}</Text>
              <Text>
                Allergies:
                {child.allergies.map(allergy => (
                  <Text>{allergy.name}</Text>
                ))}
              </Text>
            </Body>
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

export default connect(mapStateToProps)(ChildDetail);
