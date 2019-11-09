import { connect } from "react-redux";
import React, { Component } from "react";

import { List, ListItem, Body, CheckBox } from "native-base";
import { Text } from "react-native";
import { setAllergies } from "../redux/actions";

class AllergiesSelectList extends Component {
  state = {
    checked: []
  };

  handlePress = async allergy => {
    let temp = this.state.checked;
    if (!temp.includes(allergy.id)) {
      await this.setState({
        checked: [...temp, allergy.id]
      });
    } else {
      temp = temp.filter(a => a !== allergy.id);

      await this.setState({
        checked: [...temp]
      });
    }

    await this.props.setAllergies(this.state.checked);
  };

  render() {
    let allergies = this.props.allergies.map(allergy => {
      return (
        <ListItem>
          <CheckBox
            checked={this.state.checked.includes(allergy.id)}
            onPress={() => this.handlePress(allergy)}
          />
          <Body>
            <Text> {allergy.name} </Text>
          </Body>
        </ListItem>
      );
    });
    return <List>{allergies}</List>;
  }
}

const mapStateToProps = state => {
  return {
    allergies: state.rootAllergy.allergies
  };
};

const mapDispatchToProps = dispatch => ({
  setAllergies: allergies => dispatch(setAllergies(allergies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllergiesSelectList);
