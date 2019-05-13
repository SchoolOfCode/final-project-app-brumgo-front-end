import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";

export default class MainAppComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.map}>
                    <MapDisplay />
                </View>
                <View style={styles.footer}>
                    <FooterSection />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },

    map: {
        // flex: 7,
        height: "90%",
        width: "100%"
    },
    footer: {
        // flex: 1,
        height: "10%",
        width: "100%"
    }
});
