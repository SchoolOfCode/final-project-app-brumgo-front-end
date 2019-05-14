import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import pois from "../../data";

keyExtractor = (item, index) => index.toString();

//setState that gets input.value

//function handleInput

//data
//input field
// get input
// compare input to data
// return result

class FlatListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [] //input value goes here
        };

        handleChange = search => {
            this.setState({ search });
        };

        searchFilter = () => {
            pois.filter(item => {
                if (this.state === item.poiName) {
                }
            });
        };
    }
    render() {
        return (
            <>
                <SearchBar onChangeText={text => this.searchFilter(text)} />
                <>
                    {pois.map(p => (
                        <div>{p}</div>
                    ))}
                </>
            </>
        );
    }
}

export default FlatListDemo;
