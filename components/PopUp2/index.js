import React from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";

export default class PopUp2 extends React.Component {
    render() {
        return (
            <Modal isVisible={this.props.isVisible}>
                <Text>I am the modal content!</Text>
            </Modal>
        );
    }
}
