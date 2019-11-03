// import React, { Component } from "react";
// import { observer } from "mobx-react";

// // NativeBase Components
// import {
//   Text,
//   Button,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem,
//   Content
// } from "native-base";

// class Home extends Component {
//   render() {
//     const homeId = this.props.navigation.getParam("homeID");
//     const homes = cafes.find(home => homeId === home.id);

//     return (
//       <Content>
//         <List>
//           <ListItem>
//             <Left>
//               <Text>{homes.name + "\n"}</Text>
//             </Left>
//             <Body />
//           </ListItem>
//         </List>
//       </Content>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     homes: state.homesReducer.homes
//   };
// };
// export default observer(connect(mapStateToProps)(Home));

// Home.navigationOptions = ({ navigation }) => {
//   const homeId = navigation.getParam("homeID");
//   const homes = this.props.homes.find(home => homeId === home.id);
//   return {
//     title: homes.name
//   };
// };
