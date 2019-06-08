import React, { useEffect, useState } from "react";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAFTylTQiMR1JwxltSEuuq6DdHNMf11ZRY";

export default function Directions({ directionsData }) {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setUserPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }, []);

  return (
    <MapViewDirections
      origin={userPosition}
      destination={directionsData}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={7}
      strokeColor="#3EB650"
      mode="WALKING"
    />
  );
}
