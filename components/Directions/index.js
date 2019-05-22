import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import PinMarker from "../PinMarker";

const destination = { latitude: 52.47495, longitude: -1.886312 };
const initialRegion = {
    latitude: 52.476,
    longitude: -1.8885,
    latitudeDelta: 0.01,
    longitudeDelta: 0.0071
};
const GOOGLE_MAPS_APIKEY = "AIzaSyAFTylTQiMR1JwxltSEuuq6DdHNMf11ZRY";

export default class Directions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }

    render() {
        return (
            <MapView
                initialRegion={initialRegion}
                showsUserLocation={true}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            >
                <MapViewDirections
                    origin={this.state}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={7}
                    strokeColor="#3EB650"
                    mode="Walking"
                />
                <PinMarker />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        width: "100%"
    }
});
