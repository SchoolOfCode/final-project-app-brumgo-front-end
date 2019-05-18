import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";

import pois from "../../data/digbethPois";
import { BorderlessButton } from "react-native-gesture-handler";

export default function FlatListBasics() {
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
              rightIcon={<Icon name="star" type="font-awesome" color="#FCC133" />}
                ></ListItem>
            <Image style={{ height: 320, width: 350, margin: 5 }} source={require("../LoadingPage/brum.jpg")} />
            <ListItem
              title={item.poiName}
              leftIcon={<Icon name="calendar" type="font-awesome" color="#FCC133" />}
              title="Category"
              rightIcon={<Icon name="location-arrow" type="font-awesome" color="#FCC133" />}
            ></ListItem>
            <Text style={styles.text}>{item.poiTrivia}</Text>
            </View>
             )}
             />
             </View>
  )
}

// add category
// add images to database

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  title: {
fontSize: 15,
fontWeight: "bold",
letterSpacing: 2,
margin: 10,
textAlign: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text: {
    padding: 12,
    color: "#000000",
    letterSpacing: 1,
    fontSize: 15
  },
  title: {
    fontWeight: "bold"
  }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
