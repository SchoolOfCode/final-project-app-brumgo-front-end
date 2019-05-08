/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import requestLocationPermission from "./utils/permissions/fineLocationPermission";

import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";
import StorybookUIRoot from "./storybook";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "LoadingPage"
    };
  }

  handleNavigation = destination =>
    this.setState(state => ({
      ...state,
      view: destination
    }));

  componentDidMount() {
    requestLocationPermission();
  }

  render() {
    switch (this.state.view) {
      case "LoadingPage":
        return (
          <>
            <LoadingPage handleNavigation={this.handleNavigation} />
          </>
        );
        break;
      case "Storybook":
        return (
          <>
            <StorybookUIRoot />
          </>
        );
        break;
      case "MainView":
        return (
          <>
            <MainAppComponent />
          </>
        );
        break;
      default:
        <>
          <Text>Invalid View</Text>
        </>;
    }

    {
      /* // <View style={styles.container}>
      //   <MainAppComponent />
      // </View> */
    }
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
