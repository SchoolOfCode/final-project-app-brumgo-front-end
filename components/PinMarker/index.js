import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import { PoiContext } from "../PoiContextProvider";
import pois from "../../data/digbethPois";
import PinMarkerDetached from "../PinMarkerDetached";

keyExtractor = (item, index) => index.toString();

export default (PinMarker = props => {
  const [{ filteredPois }, setSearchTerms] = useContext(PoiContext);
  return (
    <View>
      {filteredPois.map((item, idx) => {
        return <PinMarkerDetached poi={item} />;
      })}
    </View>
  );
});
