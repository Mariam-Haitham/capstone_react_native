import { connect } from "react-redux";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SideBar from "../Navigation/SideBar";
import {
  Content,
  Drawer,
  Card,
  CardItem,
  Text,
  Button,
  Icon
} from "native-base";
import { Image, ScrollView, StyleSheet, View } from "react-native";

//actions
import { fetchFeed } from "../redux/actions";

//components
import Loading from "./Loading";
import IconFeed from "./IconFeed";

class Feed extends Component {
  state = {
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
            <Icon name="close" type="AntDesign" style={{ color: "black" }} />
          ) : (
            <Icon name="menu" type="Feather" style={{ color: "black" }} />
          )}
        </Button>
      ),
      headerRight: <IconFeed />
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    let babyposts = [];

    babyposts = this.props.feed.map(post => {
      return (

        <Card>
          <CardItem>
            <Image
              source={{ uri: post.image }}
              style={{ height: 340, width: 50, flex: 1, padding: 50 }}
            />
          </CardItem>
          <CardItem>
            <Text> {post.message}</Text>
          </CardItem>
        </Card>

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
          <LinearGradient
            colors={["#6D6780", "#D5C6E0", "#FFFF"]}
            style={{
              width: 800,
              height: 850
            }}
          >
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              {babyposts}
            </ScrollView>
          </LinearGradient>
        </Drawer>
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

const styles = StyleSheet.create({
  scrollArea_contentContainerStyle: {
    width: 375,
    height: 3316,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
