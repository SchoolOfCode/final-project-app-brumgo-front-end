import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Icon } from "react-native-elements";

export default function LoadingPage(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../LoadingPage/brumGoLogoRed.png")}
      />

      <View style={styles.buttonGroup}>
        <Button
          title="Log In"
          titleStyle={{ fontSize: 18, color: "#E12B38" }}
          buttonStyle={{ borderRadius: 10, backgroundColor: "#FFFFFF" }}
          containerStyle={{ width: 300, height: 50, borderRadius: 10 }}
          // onPress={}
        />
        <Button
          title=" Guest"
          titleStyle={{ fontSize: 18, color: "#E12B38" }}
          buttonStyle={{ borderRadius: 10, backgroundColor: "#FFFFFF" }}
          containerStyle={{ width: 300, height: 70, borderRadius: 10 }}
          onPress={() => props.navigation.push("Main")}
        />
      </View>

      <View style={styles.storybook}>
        <Button
          icon={<Icon name="cog" type="font-awesome" color="#E12B38" />}
          titleStyle={{ fontSize: 18, color: "#E12B38" }}
          buttonStyle={{ borderRadius: 60, backgroundColor: "#FFFFFF" }}
          containerStyle={{ width: 50, height: 50, borderRadius: 10 }}
          onPress={() => props.navigation.push("StoryBook")}
        />
      </View>
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
  buttonGroup: {}
});
