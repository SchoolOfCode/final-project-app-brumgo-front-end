import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";

import pois from "../../data/digbethPois";
import FavIcon from "./favIcon";

import iconSet from "../../assets/images/icons/iconSet";

export default function FlatListBasics() {
  const [star, setStar] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={pois}
        keyExtractor={(item, index) => index.toString()}
        // keyExtractor={this.index.toString()}
        renderItem={({ item, index }) => (
          <View>
            <ListItem
              title={item.poiName}
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

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
