import { connect } from "react-redux";
import React, { Component } from "react";

import { List, ListItem, Body, CheckBox } from "native-base";
import { Text } from "react-native";

//actions
import { setChildren } from "../redux/actions";

class ChildSelectList extends Component {
  state = {
    checked: []
  };

  handlePress = async child => {
    let temp = this.state.checked;
    if (!temp.includes(child.id)) {
      await this.setState({
        checked: [...temp, child.id]
      });
    } else {
      temp = temp.filter(a => a !== child.id);

      await this.setState({
        checked: [...temp]
      });
    }

    await this.props.setChildren(this.state.checked);
  };

  render() {
    let home = this.props.homes.find(h => h.id === this.props.home);
    let children = home.children.map(child => {
      return (
        <ListItem>
          <CheckBox
            checked={this.state.checked.includes(child.id)}
            onPress={() => this.handlePress(child)}
          />
          <Body>
            <Text> {child.name} </Text>
          </Body>
        </ListItem>
      );
    });
    return <List>{children}</List>;
  }
}

const mapStateToProps = state => {
  return {
    homes: state.rootHome.homes,
    home: state.rootHome.home
  };
};

const mapDispatchToProps = dispatch => ({
  setChildren: children => dispatch(setChildren(children))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChildSelectList);
