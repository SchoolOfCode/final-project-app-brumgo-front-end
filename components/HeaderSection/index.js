import React, { Component } from "react";
import { Header } from "react-native-elements";

export default class HeaderSection extends Component {
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "brumGo", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
        containerStyle={{
          backgroundColor: "#E12B38",
          justifyContent: "space-around"
        }}
      />
    );
  }
}
