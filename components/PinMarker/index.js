import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from "react-native";
import pois from "../../data/digbethPois";
import PinMarkerDetached from "../PinMarkerDetached";

keyExtractor = (item, index) => index.toString();

export default class PinMarker extends React.Component {
    render() {
        return (
            <View>
                {pois.map((item, idx) => {
                    return <PinMarkerDetached poi={item} />;
                })}
            </View>
        );
    }
}
