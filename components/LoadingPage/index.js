import React, { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { Button, Icon } from "react-native-elements";

import fineLocationPermissions from "../../utils/permissions/fineLocationPermission";
import imageAssets from "../../assets/images/images";

export default function LoadingPage(props) {
  useEffect(() => {
    fineLocationPermissions();
  }, []);

  return (
    <ImageBackground source={imageAssets.brum} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image style={styles.logo} source={imageAssets.brumGoLogoRed} />

          <View style={styles.buttonGroup}>
            <Button
              title="LOGIN"
              activeOpacity={1}
              underlayColor="transparent"
              loadingProps={{ size: "small", color: "#FCC133" }}
              titleStyle={{
                fontSize: 15,
                color: "#FFFFFF",
                fontWeight: "bold"
              }}
              buttonStyle={{
                borderRadius: 60,
                height: 45,
                width: 280,
                backgroundColor: "transparent",
                borderColor: "#FFFFFF",
                borderWidth: 3
              }}
              containerStyle={{ marginVertical: 10, margin: 23 }}
              onPress={() => props.navigation.push("Login")}
            />
            <Button
              title=" GUEST"
              titleStyle={{
                fontSize: 15,
                color: "#E12B38",
                fontWeight: "bold"
              }}
              buttonStyle={{
                height: 45,
                width: 280,
                borderRadius: 60,
                backgroundColor: "#FFFFFF"
              }}
              containerStyle={{ marginVertical: 10, opacity: 0.8 }}
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
    backgroundColor: "rgba(152,152,152,0.7)"
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
