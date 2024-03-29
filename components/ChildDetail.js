import { connect } from "react-redux";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Thumbnail
} from "native-base";
import { Image, View } from "react-native";

const ChildDetail = ({ child }) => {
  let image = null;
  if (child.image) image = child.image.replace("http", "https");

  return (
    <Container>
      <LinearGradient
        colors={["#FBEDCA", "#FBEDCA", "#FBEDCA"]}
        style={{
          width: 800,
          height: 850
        }}
      >
        <Content>
          <Thumbnail
            source={{ uri: child.image }}
            style={{
              width: 150,
              height: 140,
              marginTop: 30,
              borderRadius: 1,
              marginLeft: 30
            }}
          />
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontFamily: "Optima",
              fontSize: 20
            }}
          >
            Baby’s Name: {"   "}
            {child.name}
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontFamily: "Optima",
              fontSize: 20
            }}
          >
            Age:{"    "}
            {child.age}
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontFamily: "Optima",
              fontSize: 20
            }}
          >
            Date Of Birth: {"    "}
            {child.dob}
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontFamily: "Optima",
              fontSize: 20
            }}
          >
            medical history: {"    "}
            {child.medical_history}
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontFamily: "Optima",
              fontSize: 20
            }}
          >
            Allergies:
            {child.allergies.map(allergy => (
              <Text
                style={{
                  marginLeft: 400,
                  marginLeft: 30,
                  fontFamily: "Optima",
                  fontSize: 20
                }}
              >
                {"   . "}
                {allergy.name}
              </Text>
            ))}
          </Text>
        </Content>
      </LinearGradient>
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
