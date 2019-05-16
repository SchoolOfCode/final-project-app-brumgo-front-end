import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import { Icon } from "react-native-elements";
import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import LoginApp from "../LoginApp";
import GeoPopping from "../GeoPopping";
import Search from "../Search";

import usePoiFilter from "../../utils/hooks/usePoiFilter";
import useWatchPosition from "../../utils/hooks/useWatchPosition";

import pois from "../../data/digbethPois";
import useDistanceToPointsFromMe from "../../utils/geoLocTools/useDistanceToPointsFromMe";

function MapScreen() {
  const [searchTerm, setSearchTerm] = useState("");

  let filteredPois = usePoiFilter(pois, searchTerm);

  let [position, error] = useWatchPosition();

  const { coords } = position || { coords: { latitude: 1, longitude: 1 } };

  let distanceArray = useDistanceToPointsFromMe(coords, filteredPois);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <GeoPopping />
        <MapDisplay distanceArray={distanceArray} />
      </View>
      <View style={styles.footer}>
        <FooterSection />
      </View>
    </View>
  );
}

class ListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList />
        </View>
        <View style={styles.footer}>
          <FooterSection />
        </View>
      </View>
    );
  }
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
    height: "90%",
    width: "100%"
  },
  footer: {
    // flex: 1,
    height: "10%",
    width: "100%"
  }
});
