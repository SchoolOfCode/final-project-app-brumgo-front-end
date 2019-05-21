import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// import mapStyle from "./mapstyle";
import PinMarker from "../PinMarker";

const initialPosition = {
  // initial region set to Bileto
  latitude: 52.476,
  longitude: -1.8885,
  latitudeDelta: 0.01,
  longitudeDelta: 0.0071
};

export default function MapDisplay() {
  return (
    <MapView
      // customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}
      initialRegion={initialPosition}
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
