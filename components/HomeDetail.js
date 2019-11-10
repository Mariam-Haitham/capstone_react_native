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
  Left,
  CardItem,
  ListItem
} from "native-base";

//components
import Loading from "./Loading";
import IconInvite from "./IconInvite";
import IconUpdateHome from "./IconUpdateHome";

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
          <View>
            <ListItem style={{ backgroundColor: "#EFEAF3" }} itemHeader>
              <View>
                <Text
                  style={{
                    marginRight: 45,
                    fontFamily: "Optima",
                    fontWeight: "bold"
                  }}
                >
                  Name:
                </Text>
                <Text
                  style={{
                    marginLeft: 20,
                    fontFamily: "Optima",
                    fontWeight: "bold"
                  }}
                >
                  {parent.first_name} {parent.last_name}
                </Text>
              </View>

              {/* <Text
                style={{
                  fontFamily: "Optima",
                  marginLeft: 30
                }}
              ></Text> */}
              <Text style={{ marginLeft: 70, fontFamily: "Optima" }}>
                {parent.email}
              </Text>
            </ListItem>
          </View>
        );
      });
    }

    if (careTakers) {
      childCaretakers = careTakers.map(caretaker => {
        return (
          <View>
            <ListItem style={{ backgroundColor: "#EFEAF3" }} itemHeader>
              <View>
                <Text style={{ marginRight: 45, fontFamily: "Optima" }}>
                  Name:
                </Text>
                <Text style={{ marginLeft: 20, fontFamily: "Optima" }}>
                  {caretaker.first_name} {caretaker.last_name}
                </Text>
              </View>

              <Text style={{ fontFamily: "Optima", marginLeft: 30 }}>
                Email:
              </Text>
              <Text style={{ marginLeft: 10, fontFamily: "Optima" }}>
                {caretaker.email}
              </Text>
            </ListItem>
          </View>
        );
      });
    }

    if (children) {
      listOfChildren = children.map(child => {
        return (
          <View>
            <ListItem style={{ backgroundColor: "#EFEAF3" }} itemHeader>
              <Icon
                name="face-profile"
                type="MaterialCommunityIcons"
                button
                onPress={() => handlePress(child)}
                style={{ marginLeft: 20 }}
              />
              <View>
                <TouchableOpacity button onPress={() => handlePress(child)}>
                  <Text
                    style={{
                      fontFamily: "Optima",
                      fontWeight: "bold",
                      marginRight: 180,
                      marginLeft: 20
                    }}
                  >
                    Child: {""}
                    {child.name}
                  </Text>
                </TouchableOpacity>
              </View>
            </ListItem>
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
          {/* <ListItem style={{ backgroundColor: "#212121" }} itemDivider>
            <Text
              style={{
                marginLeft: 145,
                fontFamily: "Optima",
                fontWeight: "bold",
                color: "#FFFFFF"
              }}
            >
              {userHome.name}
            </Text>
          </ListItem> */}

          <ListItem
            style={{
              backgroundColor: "#212121"
            }}
            itemDivider
          >
            <Icon
              name="ios-person"
              style={{ marginLeft: 30, color: "#FFFFFF" }}
            />
            <Text style={{ marginLeft: 20, color: "#FFFFFF" }}>Parents:</Text>
            {userHome.parents.filter(parent => +parent.id === userId).length >
            0 ? (
              <Icon
                style={{ color: "white", marginRight: 30 }}
                name="adduser"
                type="AntDesign"
                onPress={() => this.props.navigation.navigate("AddScreen")}
                style={{ marginLeft: 190, color: "white" }}
              />
            ) : null}
          </ListItem>
          {childParents}
          <ListItem style={{ backgroundColor: "#212121" }} itemDivider>
            <Icon
              name="users"
              type="Feather"
              style={{ marginLeft: 30, color: "#FFFFFF" }}
            />
            <Text style={{ marginLeft: 20, color: "#FFFFFF" }}>CareTaker:</Text>
            {userHome.parents.filter(parent => +parent.id === userId).length >
            0 ? (
              <IconInvite />
            ) : null}
          </ListItem>
          {childCaretakers}

          <ListItem style={{ backgroundColor: "#212121" }} itemDivider>
            <Icon
              name="baby-buggy"
              type="MaterialCommunityIcons"
              style={{ marginLeft: 30, color: "#FFFFFF" }}
            />
            <Text style={{ marginLeft: 20, color: "#FFFFFF" }}>
              Beloved Children:
            </Text>
            {userHome.parents.filter(parent => +parent.id === userId).length >
            0 ? (
              <Icon
                style={{ color: "white", marginRight: 30 }}
                name="child"
                type="FontAwesome"
                onPress={() =>
                  this.props.navigation.navigate("ChildFormScreen")
                }
                style={{ marginLeft: 120, color: "white" }}
              />
            ) : null}
          </ListItem>
          {listOfChildren}

          {userHome.parents.filter(parent => +parent.id === userId).length >
          0 ? (
            <>
              <Button
                success
                onPress={() =>
                  this.props.navigation.navigate("UpdateHomeScreen", {
                    homeID: homeId,
                    name: userHome.name
                  })
                }
              >
                <Text style={{ marginLeft: 135 }}>Update Home</Text>
              </Button>
            </>
          ) : null}
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user,
  homes: state.rootHome.homes
});
// HomeDetail.navigationOptions = ({ navigation }) => {
//   // const homeId = this.props.navigation.getParam("homeID");
//   // const userHome = this.props.homes.find(home => homeId === home.id);
//   // {userHome.parents.filter(parent => +parent.id === userId).length >
//   //   0 ? (
//   return {
//     headerRight: <IconUpdateHome />
//   };
// };
// // ) : null)}}

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
