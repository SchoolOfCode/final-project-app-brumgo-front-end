import React, { Component } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

export default function LoadingPage({ handleNavigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../LoadingPage/brumGoLogoRed.png")}
      />

      <Button
        style={styles.button}
        title="Continue as Guest"
        onPress={() => handleNavigation("MainView")}
      />

      <Button
        style={styles.button}
        title="dev-Storybook"
        color="##E12B38"
        onPress={() => handleNavigation("Storybook")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E12B38"
  },
  logo: {
    width: 150,
    height: 150
  },
  someButtonStyle: {
    backgroundColor: "#FFFFFF"
  },
  MyButton: {
    backgroundColor: "#BADA55"
  }
});
