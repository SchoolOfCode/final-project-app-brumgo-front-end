import React from "react";
import { Image, Text, StyleSheet, View} from "react-native";

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
            <Text>{this.props.extraPoiTrivia}</Text>
            <Image 
                    source={this.props.urlExtra}
                    style={{ width: 300, height: 200}}/>
                <Text>{this.props.extraPoiTrivia}</Text>
            
          </>
        );
    }
}
                                               