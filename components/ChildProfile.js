import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Thumbnail,
  List,
  ListItem
} from "native-base";

class ChildProfile extends Component {
  // componentDidMount = async () => {
  //   if (this.props.user) await this.props.fetchProfile();
  // };

  render() {
    // const userInfo = this.props.user;
    // const profileInfo = this.props.profile;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Child's Profile</Text>
              {/* <Thumbnail
                source={profileInfo.image}
                style={{ borderRadius: "50%", width: 120, height: 100 }}
              /> */}
            </CardItem>
            <CardItem>
              <Body>
                <Text>Name:</Text>
                <Text>Date of Birth:</Text>
                <Text>Age: </Text>
                <Text>Medical History: </Text>
                <Text>Allergies: </Text>
              </Body>
              <Button bordered danger>
                <Text>Edit</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default ChildProfile;
