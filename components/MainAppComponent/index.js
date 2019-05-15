import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import Search from "../Search";

import usePoiFilter from "../../utils/hooks/usePoiFilter";

import pois from "../../data/digbethPois";

function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState(null);

  const filteredPois = usePoiFilter(pois, searchTerm);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Search searchTerm={searchTerm} handleSearch={setSearchTerm} />
        <MapDisplay />
      </View>
      <View style={styles.footer}>
        <FooterSection />
      </View>
    </View>
  );
}

class SettingsScreen extends React.Component {
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

const TabNavigator = createMaterialTopTabNavigator({
  Map: HomeScreen,
  List: SettingsScreen
});

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
