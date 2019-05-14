import { useState, useEffect } from "react";

import useWatchPosition from "./useWatchPosition";
import distanceToPointsFromMe from "../geoLocTools/distanceToPointsFromMe";
import withinGeoFence from "../geoLocTools/withinGeoFence";

const useGeoFenceToPopup = ({ poiArray, popupFunction }) => {
  const [closestLocation, setClosestLocation] = useState(null);
  const [withinFence, setWithinFence] = useState(false);
  const [position, positioningError] = useWatchPosition;

  let distanceArray = distanceToPointsFromMe(position, poiArray);

  return withinGeoFence(distanceArray, 50);
};

export default useGeoFenceToPopup;
