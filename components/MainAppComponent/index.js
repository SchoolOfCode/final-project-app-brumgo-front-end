import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import GeoPopping from "../GeoPopping";
import Search from "../Search";

function MapScreen(...props) {
  const [searching, setSearching] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <GeoPopping />
        <MapDisplay />
      </View>
      <View style={styles.search}>{searching && <Search />}</View>
      <View>
        <FooterSection searchingToggle={() => setSearching(!searching)} />
      </View>
    </View>
  );
}

function ListScreen(props) {
  const [searching, setSearching] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList />
      </View>
      <View style={styles.search}>{searching && <Search />}</View>

      <View style={styles.footer}>
        <FooterSection searchingToggle={() => setSearching(!searching)} />
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
    height: "90%",
    width: "100%"
  },
  list: {
    height: "90%",
    width: "100%"
  },
  footer: {
    height: "10%",
    width: "100%"
  },
  search: {
    bottom: 55,
    left: 0,
    // marginTop: -50,
    width: "100%",
    position: "absolute"
  }
});
