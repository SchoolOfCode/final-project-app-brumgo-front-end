import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function MapDisplay() {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}
      initialRegion={{
        // initial region set to Bileto
        latitude: 50.0517273,
        longitude: 14.4286503,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    height: "50%",
    width: "100%"
  }
});
