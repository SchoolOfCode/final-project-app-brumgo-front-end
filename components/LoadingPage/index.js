import React, { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { Button, Icon } from "react-native-elements";

import fineLocationPermissions from "../../utils/permissions/fineLocationPermission";

export default function LoadingPage(props) {
  useEffect(() => {
    fineLocationPermissions();
  }, []);

  return (
    <ImageBackground
      source={require("../LoadingPage/brum.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../LoadingPage/brumGoLogoRed.png")}
          />

          <View style={styles.buttonGroup}>
            <Button
              title="Log In"
              titleStyle={{ fontSize: 15, color: "#FFFFFF" }}
              buttonStyle={{
                borderRadius: 60,
                backgroundColor: "#E12B38",
                borderColor: "#FFFFFF",
                borderWidth: 3
              }}
              containerStyle={{ width: 280, height: 50, opacity: 0.8 }}
              onPress={() => props.navigation.push("Login")}
            />
            <Button
              title=" Guest"
              titleStyle={{ fontSize: 15, color: "#E12B38" }}
              buttonStyle={{
                borderRadius: 60,
                backgroundColor: "#FFFFFF"
              }}
              containerStyle={{ width: 280, height: 50, opacity: 0.8 }}
              onPress={() => props.navigation.push("Main")}
            />

            <Button
              icon={<Icon name="cog" type="font-awesome" color="#E12B38" />}
              titleStyle={{ fontSize: 18, color: "#E12B38" }}
              buttonStyle={{ borderRadius: 60, backgroundColor: "#FFFFFF" }}
              containerStyle={{
                width: 70,
                height: 50,
                padding: 10,
                opacity: 0.8
              }}
              onPress={() => props.navigation.push("StoryBook")}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(124,23,30,0.7)"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  logo: {
    width: 150,
    height: 150,
    opacity: 0.9
  },
  buttonGroup: {
    alignItems: "center"
  }
});
