import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";

import FavIcon from "./favIcon";
import { PoiContext } from "../PoiContextProvider";
import TickIcon from "./tickIcon";

import iconSet from "../../assets/images/icons/iconSet";

export default function FlatListBasics(props) {
  const [{ filteredPois }, { setDestination }] = useContext(PoiContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPois}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <ListItem
              leftIcon={<TickIcon />}
              title={item.poiName}
              titleStyle={{ textAlign: "center" }}
              topDivider="true"
              rightIcon={<FavIcon />}
            />

            <Image
              style={{ height: 320, width: "100%" }}
              source={item.urlExtra}
            />
            <ListItem
              title={item.poiName}
              leftIcon={
                <Image
                  style={{ height: 20, width: 20 }}
                  source={iconSet[item.category]}
                />
              }
              title={item.category}
              rightIcon={
                <Icon
                  name="location-arrow"
                  type="font-awesome"
                  color="#FCC133"
                  onPress={() => {
                    setDestination({
                      latitude: item.poiLocation.lat,
                      longitude: item.poiLocation.lng
                    });
                    props.navigation.goBack();
                  }}
                />
              }
              rightTitle="Directions"
            />
            <Text style={styles.text}>{item.poiTrivia}</Text>
          </View>
        )}
      />
    </View>
  );
}

// add category
// add images to database
// triva needs to be five lines in order to have consistency in design

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  text: {
    color: "#000000",
    letterSpacing: 1,
    fontSize: 12,
    textAlign: "justify",
    padding: 10
  }
});
