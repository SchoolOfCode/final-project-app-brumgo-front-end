import React from "react";
import { Image, Text } from "react-native";
//import factory from "../../assets/images/pictures/birds-custard-factory.jpg";

export default class ReadMore extends React.Component {
    state = {
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false
    };

    render() {
        return (
            <>
                <Image
                    source={this.props.urlExtra}
                    style={{ width: 100, height: 58 }}
                />
                <Text>{this.props.extraPoiTrivia}</Text>
            </>
        );
    }
}
