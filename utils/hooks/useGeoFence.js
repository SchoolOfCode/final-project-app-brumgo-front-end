import React from "react";
import ReactNative from "react-native";

import useWatchPosition from "./useWatchPosition";
import useDistanceToPointsFromMe from "../geoLocTools/useDistanceToPointsFromMe";
import useWithinGeoFence from "../geoLocTools/useWithinGeoFence";

const useGeoFence = poiArray => {
  const [position, positioningError] = useWatchPosition();

  const { coords } = position || { coords: { latitude: 1, longitude: 1 } };

  let distanceArray = useDistanceToPointsFromMe(coords, poiArray);

  const [inFence, poiName] = useWithinGeoFence(distanceArray, 20);

  return [inFence, poiName];
};

export default useGeoFence;
