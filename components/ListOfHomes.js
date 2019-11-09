import { connect } from "react-redux";
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

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
            <Icon name="close" type="AntDesign" style={{ color: "black" }} />
          ) : (
            <Icon name="menu" type="Feather" style={{ color: "black" }} />
          )}
        </Button>
      )
    };
  };

  handleDrawer = async () => {
    if (!!this.state.drawerIsOpen) {
      this.drawer._root.open();
    } else {
      this.drawer._root.close();
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

    let ParentOf = [];
    let CareTakerOf = [];

    if (this.props.user) {
      ParentOf = this.props.homes.map(home => {
        const user_id = this.props.user.user_id;
        if (home.parents.filter(parent => +parent.id === user_id).length > 0)
          return <HomesCard home={home} key={home.id} />;
      });

      CareTakerOf = this.props.homes.map(home => {
        const user_id = this.props.user.user_id;
        if (home.caretakers.filter(parent => +parent.id === user_id).length > 0)
          return <HomesCard home={home} key={home.id} />;
      });
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
          <Content>
            <ListItem itemDivider style={{ backgroundColor: "#D8CBE2" }}>
              <Text style={{ color: "#212121" }}>You are a parent of: </Text>
            </ListItem>
            <List>{ParentOf}</List>
            <ListItem itemDivider style={{ backgroundColor: "#D8CBE2" }}>
              <Text style={{ color: "#212121" }}>You are a caretaker of: </Text>
            </ListItem>
            <List>{CareTakerOf}</List>
            <TouchableOpacity
              style={[styles.container]}
              onPress={() => this.props.navigation.navigate("AddHomeScreen")}
            >
              <Text style={styles.caption}>Add Home</Text>
            </TouchableOpacity>
          </Content>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(99,70,124,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    padding: 30
  }
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
