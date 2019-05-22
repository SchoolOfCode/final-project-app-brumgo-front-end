import React, { Component } from "react";
import { Header, Left, Body, Right, Button, Title } from "native-base";
import { Icon } from "react-native-elements";
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#E12B38", height: 50 }}>
        <Left>
          <Button transparent>
            <Icon name="chevron-left" type="font-awesome" color="#FFFFFF" />
          </Button>
        </Left>
        <Body>
          <Title style={{ marginLeft: "60%" }}>Profile</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="cog" type="font-awesome" color="#FFFFFF" />
          </Button>
        </Right>
      </Header>
    );
  }
}
