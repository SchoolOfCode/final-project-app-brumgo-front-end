import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import pois from "../../data/digbethPois";

keyExtractor = (item, index) => index.toString();

export default function PinMarker() {
    return (
        <View>
            {pois.map((item, idx) => {
                let cat = item.category;
                return (
                    <MapView.Marker
                        key={idx}
                        title={item.poiName}
                        icon={
                            item.category === "Building"
                                ? require("./Building.png")
                                : item.category === "Culture"
                                ? require("./Culture.png")
                                : item.category === "Market"
                                ? require("./Market.png")
                                : require("./Event.png")
                        }
                        coordinate={{
                            latitude: item.poiLocation.lat,
                            longitude: item.poiLocation.lng
                        }}
                    />
                );
            })}
        </View>
    );
}
