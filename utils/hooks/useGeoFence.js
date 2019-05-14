import { useState, useEffect } from "react";

import useWatchPosition from "./useWatchPosition";
import distanceToPointsFromMe from "../geoLocTools/distanceToPointsFromMe";
import withinGeoFence from "../geoLocTools/withinGeoFence";

const useGeoFence = ({ poiArray }) => {
  const [position, positioningError] = useWatchPosition;

  let distanceArray = distanceToPointsFromMe(position, poiArray);

  const [inFence, poiName] = withinGeoFence(distanceArray, 50);

  return [inFence, poiName];
};

export default useGeoFence;
