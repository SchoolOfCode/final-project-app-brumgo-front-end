import React, { useContext } from "react";
import { View } from "react-native";
import { PoiContext } from "../PoiContextProvider";
import PinMarkerDetached from "../PinMarkerDetached";

export default (PinMarker = props => {
  const [{ filteredPois }] = useContext(PoiContext);
  return (
    <View>
      {filteredPois.map((item, idx) => {
        return (
          <PinMarkerDetached
            keyExtractor={(item, index) => index.toString()}
            poi={item}
          />
        );
      })}
    </View>
  );
});
