import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import pois from "../../data/digbethPois";

const iconSet = {
  Building: require("./Building.png"),
  Culture: require("./Culture.png"),
  Market: require("./Market.png"),
  Event: require("./Event.png")
};

keyExtractor = (item, index) => index.toString();

export default function PinMarker() {
  return (
    <View>
      {pois.map((item, idx) => {
        return (
          <MapView.Marker
            key={idx}
            title={item.poiName}
            image={iconSet[item.category]}
            coordinate={{
              latitude: item.poiLocation.lat,
              longitude: item.poiLocation.lng
            }}
          >
          <Teaxt>HI</Teaxt>
          <MapView.Marker />
        );
      })}
    </View>
  );
}
