import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import Directions from "../Directions";
import PinMarker from "../PinMarker";

const initialPosition = {
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
            <Directions />
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
