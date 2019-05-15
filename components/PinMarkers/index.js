import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import pois from "../../data/digbethPois";
import PinMarkerDetached from "../PinMarkerDetached";

keyExtractor = (item, index) => index.toString();

export default class PinMarker extends React.Component {
  render() {
    let { distanceArray } = this.props;
    return (
      <View>
        {pois.map((item, idx) => {
          return (
            <PinMarkerDetached
              key={item.poiName}
              closest={this.props.distanceArray
                .slice(0, 3)
                .map(obj => obj.poiName)}
              poi={item}
            />
          );
        })}
      </View>
    );
  }
}
