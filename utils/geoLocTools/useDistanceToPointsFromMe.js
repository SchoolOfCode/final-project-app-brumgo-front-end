import distance from "./distanceBetween";

export default (distanceToPointsFromMe = (userPosition, poiArray) => {
  if (!userPosition.latitude && !userPosition.longitude) {
    throw new Error(
      "user position needs to be an object with keys 'longitude and 'latitude' only"
    );
  }
  if (!Array.isArray(poiArray)) {
    throw new Error(
      `Second argument should be an array of objects in format [{ poiName: "string", poiLocation: { lat: number, lng: number } }`
    );
  }

  let distanceArray = poiArray
    .map(obj => {
      return {
        poiName: obj.poiName,
        distance: distance(
          userPosition.latitude,
          userPosition.longitude,
          obj.poiLocation.lat,
          obj.poiLocation.lng
        )
      };
    })
    .sort((a, b) => a.distance - b.distance);
  return distanceArray;
});
