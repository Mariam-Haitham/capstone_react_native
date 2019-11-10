import { connect } from "react-redux";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient
        colors={["#6D6780", "#D5C6E0", "#FFFF"]}
        style={{
          width: 800,
          height: 850
        }}
      >
        <Content>
          <Card>
            <CardItem key={child.id} style={{ backgroundColor: "#EFEAF3" }}>
              <Body>
                <Thumbnail
                  source={{ uri: child.image }}
                  style={{ width: 90, height: 90 }}
                />
                <Text style={{ marginTop: 20, fontFamily: "Optima" }}>
                  Baby’s Name: {"   "}
                  {child.name}
                </Text>
                <Text style={{ marginTop: 20, fontFamily: "Optima" }}>
                  Age:{"    "}
                  {child.age}
                </Text>
                <Text style={{ marginTop: 20, fontFamily: "Optima" }}>
                  Date Of Birth: {"    "}
                  {child.dob}
                </Text>
                <Text style={{ marginTop: 20, fontFamily: "Optima" }}>
                  medical history: {"    "}
                  {child.medical_history}
                </Text>
                <Text style={{ marginTop: 20, fontFamily: "Optima" }}>
                  Allergies:
                  {child.allergies.map(allergy => (
                    <Text style={{ marginLeft: 400 }}>
                      {"   , "}
                      {allergy.name}
                    </Text>
                  ))}
                </Text>
              </Body>
            </CardItem>
          </Card>
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
