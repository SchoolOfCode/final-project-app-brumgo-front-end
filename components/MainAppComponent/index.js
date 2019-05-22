import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import GeoPopping from "../GeoPopping";
import PickerCategory from "../PickerCategory";

import SearchContext from "../SearchContext";

function MapScreen(props) {
  return (
    <SearchContext.Provider value={["bobob", () => {}]}>
      <View style={styles.container}>
        <View style={styles.map}>
          <GeoPopping />
          <MapDisplay />
        </View>
        <View style={styles.footer}>
          <FooterSection />
        </View>
      </View>
    </SearchContext.Provider>
  );
}

function ListScreen(props) {
  const [searchSets, setSearchSets] = useContext(SearchContext);
  return (
    <SearchContext.Provider value={["list", () => {}]}>
      <View style={styles.container}>
        <PickerCategory />
        <View style={styles.list}>
          {console.log(searchSets)}
          <Text>{searchSets}</Text>
          <FlatList />
        </View>
        <View style={styles.footer}>
          <FooterSection />
        </View>
      </View>
    </SearchContext.Provider>
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
