/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FlatListBasics from "./components/FlatList";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.brumGo}>Welcome to brumGo! </Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            // initial region set to Bileto
            latitude: 50.0517273,
            longitude: 14.4286503,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <FlatListBasics />
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
  },
  map: {
    flex: 1
  }
});
