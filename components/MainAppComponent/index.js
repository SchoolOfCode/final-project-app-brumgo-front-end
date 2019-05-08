import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";
import FlatList from "../FlatList";

export default class MainAppComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderSection />
        <FlatList />
        <FooterSection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});
