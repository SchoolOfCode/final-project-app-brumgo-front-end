import React, { Component } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

export default function LoadingPage({ handleNavigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../LoadingPage/brumGo.png")}
      />
      <Button title="Go to App" onPress={() => handleNavigation("MainView")} />
      <Button
        title="dev-Storybook"
        onPress={() => handleNavigation("Storybook")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  }
});
