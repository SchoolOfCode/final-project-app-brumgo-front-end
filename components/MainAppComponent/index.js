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
import Search from "../Search";

function ViewContainer(props) {
<<<<<<< HEAD
  return (
    <View style={styles.container}>
      {props.children}
      <View style={styles.footer}>
        <FooterSection {...props} />
=======
  const [searching, setSearching] = useState(false);
  return (
    <View style={styles.container}>
      {props.children}
      <View style={styles.search}>{searching && <Search />}</View>
      <View style={styles.footer}>
        <FooterSection
          searchingToggle={() => setSearching(!searching)}
          {...props}
        />
>>>>>>> de1a60fc11137aa03ff3ea992b5f9f02029786ea
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
<<<<<<< HEAD
=======
  const [searching, setSearching] = useState(false);
>>>>>>> de1a60fc11137aa03ff3ea992b5f9f02029786ea
  return (
    <ViewContainer {...props}>
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
