import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import pois from "../../data/digbethPois";

export default function FlatListBasics() {
    return (
        <View style={styles.container}>
            <FlatList
                data={pois}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.poiName}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
