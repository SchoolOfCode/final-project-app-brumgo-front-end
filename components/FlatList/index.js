import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";

import pois from "../../data/digbethPois";
import FavIcon from "./favIcon";
import { statement } from "@babel/template";

const iconSet = {
    Building: require("../../assets/images/icons/Building.png"),
    Culture: require("../../assets/images/icons/Culture.png"),
    Market: require("../../assets/images/icons/Market.png"),
    Event: require("../../assets/images/icons/Event.png"),
    FoodDrink: require("../../assets/images/icons/Food.png")
};

export default function FlatListBasics() {
<<<<<<< HEAD
=======
    const [star, setStar] = useState(false);

>>>>>>> 50da17d6cc086541ebbd6d127b050595419307e9
    return (
        <View style={styles.container}>
            <FlatList
                data={pois}
                keyExtractor={(item, index) => index.toString()}
                // keyExtractor={this.index.toString()}
                renderItem={({ item, index }) => (
                    <View>
                        <ListItem
                            title={item.poiName}
                            topDivider="true"
                            rightIcon={<FavIcon />}
                        />
                        <Image
                            style={{ height: 320, width: "100%" }}
                            source={require("../LoadingPage/brum.jpg")}
                        />
                        <ListItem
                            title={item.poiName}
                            leftIcon={
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={iconSet[item.category]}
                                />
                            }
                            title={item.category}
                            rightIcon={
                                <Icon
                                    name="location-arrow"
                                    type="font-awesome"
                                    color="#FCC133"
                                />
                            }
                            rightTitle="Route"
                        />
                        <Text style={styles.text}>{item.poiTrivia}</Text>
                    </View>
                )}
            />
        </View>
    );
}

// add category
// add images to database
// triva needs to be five lines in order to have consistency in design

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    text: {
        color: "#000000",
        letterSpacing: 1,
        fontSize: 12,
        textAlign: "justify",
        padding: 10
    }
});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
