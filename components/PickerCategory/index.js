import React, { Component } from "react";
import { Picker, View, Item } from "react-native";

export default class PickerCategory extends Component {
  render() {
    return (
      <View>
        <Picker>
          <Item value={"Buildings"} label={"Buildings"} />
          <Item value={"Market"} label={"Market"} />
          <Item value={"Event"} label={"Event"} />
          <Item value={"Culture"} label={"Culture"} />
          <Item value={"Food & Drink"} label={"Food & Drink"} />
        </Picker>
      </View>
    );
  }
}
