import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";

import pois from "../../data/digbethPois";

export default function FlatListBasics() {
  return (
    <View style={styles.container}>
      <FlatList
        data={pois}
        keyExtractor={(item, index) => index.toString()}
        // keyExtractor={this.index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.title}>
            <ListItem bottomDivider={true} bottomDivider={true} style={styles.header} title={item.poiName} />
            <Image style={{ height: 320, width: 320, margin: 10 }} source={require("../LoadingPage/brum.jpg")} />
            <Text style={styles.text}>{item.poiTrivia}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    width: "98%",
    borderWidth: 2,
    borderColor: '#D3D3D3'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  text: {
    padding: 15,
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
