import React, { Component } from "react";
import {
  Content,
  ListItem,
  CheckBox,
  Body,
  Accordion,
  Right,
  Left
} from "native-base";
import { Text, View } from "react-native";
export default class CheckBoxE extends Component {
  render() {
    return (
      <Content style={{ color: "blue" }}>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text style={{ color: "black" }}>Test</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} color="green" />
          <Body>
            <Text>Finish list Screen</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} color="green" />
          <Body>
            <Text>Finish List Screen</Text>
          </Body>
        </ListItem>
        <ListItem>
          <Text>Finish List Screen</Text>
        </ListItem>
      </Content>
    );
  }
}
