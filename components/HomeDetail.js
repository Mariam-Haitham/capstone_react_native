import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
//components

// NativeBase Components
import {
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Content,
  Icon,
  Container,
  Card,
  CardItem,
  Header
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

class HomeDetail extends Component {
  componentDidMount() {
    const homeId = this.props.navigation.getParam("homeID");
    const userHome = this.props.homes.find(home => homeId === home.id);
  }
  render() {
    // console.log("HERE", this.props.home);
    const homeId = this.props.navigation.getParam("homeID");
    const userHome = this.props.homes.find(home => homeId === home.id);
    // console.log("UUUUU", userHome);
    const parents = userHome.parents;
    const careTakers = userHome.caretakers;
    const children = userHome.children;
    // console.log("PPPPP", parents);
    let childParents = [];
    let childCaretakers = [];
    let listOfChildren = [];

    if (parents) {
      // console.log("pareent", parents);
      childParents = parents.map(parent => {
        return (
          <View style={styles.container}>
            <View style={styles.Content}>
              <Text style={styles.text6}>
                Parent: {parent.first_name} {parent.last_name}
              </Text>
              <Text style={styles.text7}>Email:{parent.email}</Text>
            </View>
          </View>
        );
      });
    }

    if (careTakers) {
      // console.log("careTakers", careTakers);
      childCaretakers = careTakers.map(caretakers => {
        return (
          <View style={styles.container}>
            <View style={styles.Content}>
              <Text style={styles.text6}>
                careTaker: {caretakers.first_name} {caretakers.last_name}
              </Text>
              <Text style={styles.text7}>Email:{caretakers.email}</Text>
            </View>
          </View>
        );
      });
    }

    if (!userHome) return <Text>Loading</Text>; //add loading component here!
    const handlePress = child => {
      console.log("I'm here");
      this.props.navigation.navigate("ChildDetailScreen", {
        childId: child.id,
        homeID: homeId
      });
    };
    if (children) {
      // console.log("children", children);
      listOfChildren = children.map(child => {
        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.Content}
              button
              onPress={() => handlePress(child)}
            >
              <Text style={styles.text6}>Child:</Text>
              <Text style={styles.text7}>Name: {child.name}</Text>
            </TouchableOpacity>
          </View>
        );
      });
    }

    return (
      <Content>
        <List>
          <CardItem>
            <Icon name="ios-person" />
            {childParents}
          </CardItem>
          <CardItem>
            <Icon name="users" type="Feather" />
            {childCaretakers}
          </CardItem>
          <CardItem>
            <Icon name="baby-buggy" type="MaterialCommunityIcons" />
            {listOfChildren}
          </CardItem>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  homes: state.homesReducer.homes
});

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  icon4: {
    color: "black",
    fontSize: 20,
    width: 20,
    marginTop: 20,
    alignSelf: "flex-start"
  },
  Content: {
    width: 294,
    height: 80,
    alignSelf: "center",
    marginTop: 10
  },
  text6: {
    color: "black",
    fontSize: 16
  },
  text7: {
    color: "black",
    fontSize: 14,

    marginTop: 13
  },
  text8: {
    color: "black",
    fontSize: 14,

    marginTop: 13
  }
});

export default connect(mapStateToProps)(HomeDetail);

HomeDetail.navigationOptions = ({ navigation }) => {
  const homeId = navigation.getParam("homeID");
  const home = this.props.homes.find(home => homeId === home.id);
  return {
    title: home.name
  };
};
