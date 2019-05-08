import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class LoadingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../LoadingPage/brumGo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  }
});
