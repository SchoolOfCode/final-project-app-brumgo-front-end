import React, { useState } from "react";
import { View } from "react-native";

import PopupDialogue from "../PopupDialogue";

import pois from "../../data/digbethPois";

import useGeoFence from "../../utils/hooks/useGeoFence";

const GeoPopping = props => {
  // needs to change state or props to force rerender
  let [inFence, poiName] = useGeoFence(pois);

  return (
    <View>
      <PopupDialogue isVisible={inFence} poiName={poiName} />
    </View>
  );
};

export default GeoPopping;
