import React, { Component } from "react";
import { View } from "react-native";
import Search from "../Search";
import PickerCategory from "../PickerCategory";
import FlatList from "../FlatList/index";

export default class List extends Component {
  render() {
    return (
      <View>
        <Search />
        <PickerCategory />
        <FlatList />
      </View>
    );
  }
}
