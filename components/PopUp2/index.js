import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

export default class PopUp2 extends Component {
    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 0.5 }}>
                <Button
                    title="Show modal NOW!"
                    onPress={this.toggleModal}
                    color="#841584"
                />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1 }}>
                        <Text>Hello!</Text>
                        <Button title="Hide modal" onPress={this.toggleModal} />
                    </View>
                </Modal>
            </View>
        );
    }
}
