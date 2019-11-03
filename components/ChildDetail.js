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
  Button,
  Thumbnail,
  List,
  ListItem
} from "native-base";

//components
// import Loading from "./Loading";
// import Default from "../default.jpg";

//actions
import { fetchChildProfile, logout } from "../redux/actions";

class ChildProfile extends Component {
  componentDidMount = async () => {
    if (this.props.user) await this.props.fetchChildProfile();
  };

  render() {
    if (!this.props.user) return this.props.navigation.navigate("SignupScreen");

    // if (this.props.loading) return <Loading />;

    const userInfo = this.props.user;

    // let image = profileInfo.image;
    // if (!image) image = Default;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              {/* <Thumbnail
                source={image}
                style={{ borderRadius: "50%", width: "120px", height: "100px" }}
              /> */}
            </CardItem>
            <CardItem>
              <Body>
                <Text>Baby's Name: {user.name}</Text>
                <Text>medical history {user.medical_history}</Text>
                <Text> allergies: {user.allergies}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              {/* <Button
                bordered
                onClick={() =>
                  this.props.navigation.navigate("EditProfileScreen")
                }
              >
                <Text>Edit Profile</Text>
              </Button> */}
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
  }
}

const mapStateToProps = state => ({
  user: state.authState.user,
  loading: state.rootProfile.loading
});

const mapDispatchToProps = dispatch => ({
  fetchChildProfile: () => dispatch(fetchChildProfile()),
  logout: navigation => dispatch(logout(navigation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildProfile);
