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
  Button
} from "native-base";
//components
import Loading from "./Loading";
//actions
import { logout } from "../redux/actions";
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
  const child = state.homesReducer.homes
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
