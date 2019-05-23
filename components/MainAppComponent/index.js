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
import UserProfile from "../UserProfile";
import usePoiFilter from "../../utils/hooks/usePoiFilter";

function ViewContainer(props) {
    return (
        <View style={styles.container}>
            {props.children}
            <View style={styles.footer}>
                <FooterSection {...props} />
            </View>
        </View>
    );
}

function MapScreen(props) {
    return (
        <ViewContainer {...props}>
            <View style={styles.map}>
                <GeoPopping />
                <MapDisplay />
            </View>
        </ViewContainer>
    );
}

function ListScreen(props) {
    return (
        <ViewContainer {...props}>
            <PickerCategory />
            <View style={styles.list}>
                <FlatList />
            </View>
        </ViewContainer>
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
