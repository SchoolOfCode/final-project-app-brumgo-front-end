import React from "react";
import { View } from "react-native";

import PopupDialogue from "../PopupDialogue";

import pois from "../../data/digbethPois";

import useGeoFence from "../../utils/hooks/useGeoFence";

const GeoPopping = props => {
  let [inFence, poiName] = useGeoFence(pois);

  return (
    <>
      <View>
        <PopupDialogue inFence={inFence} poiName={poiName} />
      </View>
    </>
  );
};

export default GeoPopping;
