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

//actions
import { logout } from "../redux/actions";

class Profile extends Component {
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
              <Text>User Profile </Text>
              {/* <Thumbnail
                source={profileInfo.image}
                style={{ borderRadius: "50%", width: "120px", height: "100px" }}
              /> */}
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
                // onClick={() => this.props.logout(this.props.navigation)}
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

// const mapStateToProps = state => ({
//   user: state.authState.user,
//   profile: state.rootProfile.profile,
//   loading: state.rootProfile.loading
// });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapDispatchToProps)(Profile);
