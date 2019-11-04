import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  List,
  ListItem,
  Text,
  Button,
  Drawer,
  Icon,
  Left
} from "native-base";
//actions
import { fetchHomes } from "../redux/actions";

//components
import SideBar from "../Navigation/SideBar";
import HomesCard from "./HomesCard";
import Loading from "./Loading";

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
    await this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
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

    const ListOfHomes = this.props.homes.map(home => (
      <HomesCard home={home} key={home.id} />
    ));

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
            <List>{ListOfHomes}</List>
          </Content>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    homes: state.homesReducer.homes,
    user: state.authState.user,
    loading: state.homesReducer.loading
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
