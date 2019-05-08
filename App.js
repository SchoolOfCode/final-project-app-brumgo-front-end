/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import MainAppComponent from "./components/MainAppComponent";

export default class App extends Component {
  // const mapCenter =

  render() {
    return (
      <View style={styles.container}>
        <MainAppComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brumGo: {
    fontSize: 40,
    color: "#FF1493",
    textAlign: "center"
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
