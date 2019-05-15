import React, { Component } from "react";
import { SearchBar } from "react-native-elements";

export default class Search extends Component {
    render() {
        return (
            <SearchBar
                lightTheme
                round
                placeholder="Searching for..."
                onChangeText={this.props.handleSearch}
                value={this.props.searchTerm}
                containerStyle={{ height: 60, backgroundColor: "#D3D3D3" }}
            />
        );
    }
}
