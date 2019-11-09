import { connect } from "react-redux";
import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Text,
  Button,
  Right,
  List,
  Content,
  Icon,
  CardItem
} from "native-base";

//components
import Loading from "./Loading";

class HomeDetail extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const homeId = navigation.getParam("homeID");
  //   const userHome = this.props.homes.find(home => +homeId == home.id);
  //   return {
  //     title: userHome.name
  //   };
  // };

  render() {
    const homeId = this.props.navigation.getParam("homeID");
    const userHome = this.props.homes.find(home => homeId === home.id);

    userId = this.props.user.user_id;

    if (!userHome) return <Loading />;

    const parents = userHome.parents;
    const children = userHome.children;
    const careTakers = userHome.caretakers;

    let childParents = [];
    let listOfChildren = [];
    let childCaretakers = [];

    if (parents) {
      childParents = parents.map(parent => {
        return (
          <View style={styles.container} key={parent.id}>
            <View style={styles.Content}>
              <Text style={styles.text6}>Parent</Text>
              <Text style={styles.text6}>
                Name: {parent.first_name} {parent.last_name}
              </Text>
              <Text style={styles.text7}>Email:{parent.email}</Text>
            </View>
          </View>
        );
      });
    }

    if (careTakers) {
      childCaretakers = careTakers.map(caretaker => {
        return (
          <View style={styles.container} key={caretaker.id}>
            <View style={styles.Content}>
              <Text style={styles.text6}>CareTaker</Text>
              <Text style={styles.text6}>
                Name: {caretaker.first_name} {caretaker.last_name}
              </Text>
              <Text style={styles.text7}>Email:{caretaker.email}</Text>
            </View>
          </View>
        );
      });
    }

    if (children) {
      listOfChildren = children.map(child => {
        return (
          <View style={styles.container} key={child.id}>
            {console.log("!!!!!!!!!!!!!!!!!", this.props)}
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

    const handlePress = child => {
      this.props.navigation.navigate("ChildDetailScreen", {
        childId: child.id,
        homeID: homeId
      });
    };

    return (
      <>
        <Content>
          <Text>Name: {userHome.name}</Text>
          <List>
            <Icon name="ios-person" />
            {childParents}

            <Icon name="users" type="Feather" />
            {childCaretakers}

            <Icon name="baby-buggy" type="MaterialCommunityIcons" />
            {listOfChildren}

            {userHome.parents.filter(parent => +parent.id === userId).length >
            0 ? (
              <>
                <CardItem>
                  <Right>
                    <View style={styles.adding}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("ChildFormScreen", {
                            homeId: homeId
                          })
                        }
                      >
                        <Icon name="ios-add-circle" type="Ionicons"></Icon>
                      </TouchableOpacity>
                    </View>
                  </Right>
                </CardItem>
                <Button
                  bordered
                  success
                  onPress={() =>
                    this.props.navigation.navigate("AddScreen", {
                      homeID: homeId
                    })
                  }
                >
                  <Text>Invite</Text>
                </Button>
                <Button
                  bordered
                  success
                  onPress={() =>
                    this.props.navigation.navigate("UpdateHomeScreen", {
                      homeID: homeId,
                      name: userHome.name
                    })
                  }
                >
                  <Text>Update Home</Text>
                </Button>
              </>
            ) : null}
          </List>
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  homes: state.rootHome.homes
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
