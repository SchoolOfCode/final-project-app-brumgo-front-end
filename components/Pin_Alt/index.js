import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import pois from "../../data/digbethPois";
import Modal from "react-native-modal";

const iconSet = {
    Building: require("./Building.png"),
    Culture: require("./Culture.png"),
    Market: require("./Market.png"),
    Event: require("./Event.png")
};

keyExtractor = (item, index) => index.toString();

state = {
    isModalVisible: false
};

toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
};

export default function Pin_Alt() {
    return (
        <View>
            {pois.map((item, idx) => {
                return (
                    <Marker
                        key={idx}
                        title={item.poiName}
                        coordinate={{
                            latitude: item.poiLocation.lat,
                            longitude: item.poiLocation.lng
                        }}
                        onPress={() => this.setState({ visibleModal: "fancy" })}
                    >
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={iconSet[item.category]}
                        />
                        <Modal isVisible={this.state.isModalVisible}>
                            <View style={{ flex: 1 }}>
                                <Text>Nice little thing</Text>
                                <Button
                                    title="Hide modal"
                                    onPress={this.toggleModal}
                                />
                            </View>
                        </Modal>
                    </Marker>
                );
            })}
        </View>
    );
}
