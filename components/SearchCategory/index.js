import React, { Component } from "react";
import { Text, View } from "react-native";
import Search from "../Search";
import PickerCategory from "../PickerCategory";

export default class SearchCategory extends Component {
  render() {
    return (
      <View>
        <Search />
        <PickerCategory />
      </View>
    );
  }
}
