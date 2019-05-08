import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function PinMarker() {
    return (
        <MapView.Marker
            coordinate={{
                latitude: 52.4752029,
                longitude: -1.884587
            }}
            title={"The Custard Factory"}
        />
    );
}
