import React, { Component } from "react";
import { View } from "react-native"
import { Picker } from "native-base";

export default class PickerCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <View>
            <Picker
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
        <Picker.Item label={"Pick a Category"} value="key0" />
        <Picker.Item label={"Buildings"} value="key1" />
        <Picker.Item label={"Markets"} value="key2" />
        <Picker.Item label={"Events"} value="key3" />
        <Picker.Item label={"Food & Drink"} value="key4" />
        <Picker.Item label={"Culture"} value="key5" />
            </Picker>
            </View>
    );
  }
}