import toRad from "./degreesToRadians";
import { isTSExpressionWithTypeArguments } from "@babel/types";

export default (distanceBetween = (lat1, lng1, lat2, lng2) => {
  if (
    [lat1, lng1, lat2, lng2].filter(val => typeof val === "number").length !== 4
  ) {
    throw new Error(
      "requires 'ALL' 4 number arguments (lat1, lng1, lat2, lng2)"
    );
  }
  //radius of earth
  const R = 6371000;

  let dLat = toRad(lat1 - lat2);
  let dLng = toRad(lng1 - lng2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let distance = R * c;

  let roundedDistance = Math.round(distance * 100) / 100;

  return roundedDistance;
});
