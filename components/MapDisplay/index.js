import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import mapStyle from "./mapstyle";
import PinMarker from "../PinMarker";

export default function MapDisplay() {
  return (
    <MapView
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}
      initialRegion={{
        // initial region set to Bileto
        latitude: 52.475149,
        longitude: -1.884333,
        latitudeDelta: 0.01,
        longitudeDelta: 0.0071
      }}
    >
      <PinMarker />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%"
  }
});
