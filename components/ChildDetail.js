import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
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
  // if (!child) return <HomeDetail />;
  console.log("CHILD CHILD", child);

  // if (this.props.loading) return <Loading />;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header></CardItem>
          <CardItem>
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
  const child = state.homesReducer.homes
    .find(home => +homeId === home.id)
    .children.find(child => child.id === +childId);
  return {
    child
  };
};

export default connect(mapStateToProps)(ChildDetail);
