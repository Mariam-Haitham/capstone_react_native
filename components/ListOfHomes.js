import { connect } from "react-redux";
import React, { Component } from "react";

import {
  Content,
  List,
  Button,
  Drawer,
  Icon,
  Text,
  ListItem
} from "native-base";

//actions
import { fetchHomes } from "../redux/actions";

//components
import Loading from "./Loading";
import HomesCard from "./HomesCard";
import SideBar from "../Navigation/SideBar";

class ListOfHomes extends Component {
  state = {
    drawerIsOpen: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "List of Homes",

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

    if (this.props.user) {
      await this.props.fetchHomes();
    }
  };

  render() {
    if (this.props.loading) return <Loading />;

    const ParentOf = this.props.homes.map(home => {
      const user_id = this.props.user.user_id;
      if (home.parents.filter(parent => +parent.id === user_id).length > 0)
        return <HomesCard home={home} key={home.id} />;
    });

    const CareTakerOf = this.props.homes.map(home => {
      const user_id = this.props.user.user_id;
      if (home.caretakers.filter(parent => +parent.id === user_id).length > 0)
        return <HomesCard home={home} key={home.id} />;
    });

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
          <Content>
            <ListItem itemDivider>
              <Text>You are a parent of: </Text>
            </ListItem>
            <List>{ParentOf}</List>
            <ListItem itemDivider>
              <Text>You are a caretaker of: </Text>
            </ListItem>
            <List>{CareTakerOf}</List>
          </Content>
          <Button
            onPress={() => this.props.navigation.navigate("AddHomeScreen")}
          >
            <Text>Add Home</Text>
          </Button>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    homes: state.rootHome.homes,
    user: state.rootAuth.user,
    loading: state.rootHome.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHomes: () => dispatch(fetchHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfHomes);

ListOfHomes.navigationOptions = () => {
  return {
    title: "Home List",
    headLeft: null
  };
};
