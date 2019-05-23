import React, { Component } from "react";
import { View } from "react-native";
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
    const { searchTerms, setSearchTerms } = this.props;
    return (
      <View>
        <Picker
          style={{ width: undefined }}
          selectedValue={searchTerms}
          onValueChange={value => setSearchTerms({ categories: [value] })}
        >
          <Picker.Item
            label={"All Categories"}
            value={["Building", "Market", "Event", "Culture", "FoodDrink"]}
          />
          <Picker.Item label={"Buildings"} value={["Buildings"]} />
          <Picker.Item label={"Markets"} value={["Markets"]} />
          <Picker.Item label={"Events"} value={["Events"]} />
          <Picker.Item label={"Food & Drink"} value={["Food & Drink"]} />
          <Picker.Item label={"Culture"} value={["Culture"]} />
        </Picker>
      </View>
    );
  }
}
