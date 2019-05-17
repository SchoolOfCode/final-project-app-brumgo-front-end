import React, { useState, useEffect } from "react";
import { View } from "react-native";

import PopupDialogue from "../PopupDialogue";

import pois from "../../data/digbethPois";

import useGeoFence from "../../utils/hooks/useGeoFence";

const GeoPopping = props => {
  // const [force, setForce] = useState(true);
  // needs to change state or props to force rerender
  let [inFence, poiName] = useGeoFence(pois);

  // useEffect(() => {
  //   setTimeout(() => setForce(!force), 1000);
  // }, [force]);

  return (
    <View>
      <PopupDialogue isVisible={inFence} poiName={poiName} />
    </View>
  );
};

export default GeoPopping;
