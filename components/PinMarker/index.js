import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { Marker, Callout } from "react-native-maps";
import pois from "../../data/digbethPois";

const iconSet = {
    Building: require("./Building.png"),
    Culture: require("./Culture.png"),
    Market: require("./Market.png"),
    Event: require("./Event.png")
};

keyExtractor = (item, index) => index.toString();

export default class PinMarker extends React.Component {
    render() {
        return (
            <View>
                {pois.map((item, idx) => {
                    return (
                        <Marker
                            key={idx}
                            title={item.poiName}
                            coordinate={{
                                latitude: item.poiLocation.lat,
                                longitude: item.poiLocation.lng
                            }}
                        >
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={iconSet[item.category]}
                            />
                            <Callout
                                style={{
                                    width: 100,
                                    backgroundColor: "#ffffff"
                                }}
                                tooltip={false}
                                onPress={() => alert(item.poiTrivia)}
                            >
                                <Text>{item.poiName}</Text>
                            </Callout>
                        </Marker>
                    );
                })}
            </View>
        );
    }
}
