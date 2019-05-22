import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";

import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import Directions from "../Directions";
import GeoPopping from "../GeoPopping";
import PickerCategory from "../PickerCategory";

function MapScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.map}>
                <GeoPopping />
                <Directions />
            </View>
            <View style={styles.footer}>
                <FooterSection />
            </View>
        </View>
    );
}

function ListScreen(props) {
    return (
        <View style={styles.container}>
            <PickerCategory />
            <View style={styles.list}>
                <FlatList />
            </View>
            <View style={styles.footer}>
                <FooterSection />
            </View>
        </View>
    );
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        Map: {
            screen: MapScreen,
            navigationOptions: {
                tabBarLabel: "Map"
            }
        },
        List: {
            screen: ListScreen,
            navigationOptions: {
                tabBarLabel: "List"
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "#D3D3D3",
            showLabel: true,
            style: {
                backgroundColor: "#E12B38"
            }
        }
    }
);

export default createAppContainer(TabNavigator);

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
    list: {
        height: "81%",
        width: "100%"
    },
    footer: {
        height: "10%",
        width: "100%",
        position: "relative"
    },
    search: {
        // flex: 1,
        top: -50,
        height: "10%",
        width: "100%",
        position: "relative"
    }
});
