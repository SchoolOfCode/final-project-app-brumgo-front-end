import React, { Component } from "react";
import { View } from "react-native";
import pois from "../../data/digbethPois";
import { ListItem } from "react-native-elements";

keyExtractor = (item, index) => index.toString();

export default function FlatListElem() {
  return (
    <View>
      {pois.map((item, idx) => (
        <ListItem key={idx} title={item.poiName} subtitle={item.poiTrivia} />
      ))}
    </View>
  );
}
