import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../Header/logo485.png")}
          />
        </View>
        <View style={styles.content} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderColor: "red",
    borderWidth: 2
  },
  content: {
    flex: 5
  },

  logo: {
    height: "100%",
    resizeMode: "contain"
  }
});
