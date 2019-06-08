import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import FlatList from "../FlatList";
import MapDisplay from "../MapDisplay";
import GeoPopping from "../GeoPopping";
import SocialMediaFAB from "../SocialMediaFAB";
import ViewContainer from "../ViewContainer";
import images from "../../assets/images/images";

function MapScreen(props) {
  return (
    <ViewContainer {...props}>
      <View style={styles.map}>
        <GeoPopping />
        <MapDisplay />
        <SocialMediaFAB />
        <Image style={styles.logo} source={images.brumGoLogoRed} />
      </View>
    </ViewContainer>
  );
}

function ListScreen(props) {
  return (
    <ViewContainer {...props}>
      <View style={styles.list}>
        <FlatList {...props} />
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
    },
    logo: {
      position: "absolute",
      height: 50,
      width: 50,
      top: 200,
      left: 5,
      zIndex: 100
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
    height: "90.3%",
    width: "100%"
  },
  list: {
    height: "90.3%",
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
