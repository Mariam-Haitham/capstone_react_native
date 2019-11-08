import { connect } from "react-redux";
import React, { Component } from "react";

import SideBar from "../Navigation/SideBar";
import {
  Container,
  Content,
  Drawer,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon
} from "native-base";
import { Image } from "react-native";

//actions
import { fetchFeed } from "../redux/actions";

//components
import Loading from "./Loading";
import PostBox from "./PostBox";

class Feed extends Component {
  state = {
    drawerIsOpen: false,
    drawerIsOpen: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Feed",

      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.getParam("handleDrawer")()}
        >
          {navigation.getParam("isOpen") ? (
            <Icon name="close" type="AntDesign" />
          ) : (
            <Icon name="menu" type="Feather" />
          )}
        </Button>
      )
    };
  };

  handleDrawer = async () => {
    if (this.state.drawerIsOpen) {
      this.drawer._root.close();
    } else {
      this.drawer._root.open();
    }
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    this.props.navigation.setParams({ isOpen: this.state.drawerIsOpen });
  };

  componentDidMount = async () => {
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });

    await this.props.fetchFeed(this.props.navigation.getParam("homeID"));
  };

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.navigation.getParam("homeID") !=
  //     prevProps.navigation.getParam("homeID")
  //   )
  //     this.props.fetchFeed(this.props.navigation.getParam("homeID"));
  //   else {
  //     clearInterval(this.interval);
  //     this.interval = setInterval(
  //       () => this.props.fetchFeed(this.props.navigation.getParam("homeID")),
  //       500
  //     );
  //   }
  // }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    let babyposts = [];

    //mappp
    babyposts = this.props.feed.map(posts => {
      return (
        <Content>
          <Card>
            <CardItem>
              <Image
                source={{ uri: posts.image }}
                style={{ height: 150, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Text> {posts.message}</Text>
            </CardItem>
          </Card>
        </Content>
      );
    });

    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
          panOpenMask={0.6}
          openDrawerOffset={0.4}
          onClose={this.closeDrawer}
          onOpen={this.openDrawer}
          captureGestures="open"
        >
          {babyposts}
          <PostBox navigation={this.props.navigation} />
        </Drawer>

        {/* <Container>
              <Content>
                <Card>
                  <CardItem>
                    <Thumbnail
                      source={{ uri: post.image }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem>
                    <Text> {posts.message}</Text>
                  </CardItem>
                </Card>
              </Content>
            </Container> */}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    feed: state.rootFeed.feed,
    loading: state.rootFeed.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFeed: homeID => dispatch(fetchFeed(homeID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
