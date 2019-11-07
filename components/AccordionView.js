import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Collapsible from "react-native-collapsible";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import CheckBoxE from "./CheckBoxE";
class AccordionView extends Component {
  state = {
    collapsed: true
  };
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  render() {
    // const { word } = this.props;
    // let definitions = word.definitions.map((def, idx) => (
    //   <Text key={idx} style={{ textAlign: "center" }}>
    //     {def}
    //   </Text>
    // ));
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}></View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <CheckBoxE />
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 5
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  },
  content: {
    padding: 40,
    backgroundColor: "#fff"
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    textAlign: "center"
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center"
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8
  }
});
export default withNavigation(AccordionView);
