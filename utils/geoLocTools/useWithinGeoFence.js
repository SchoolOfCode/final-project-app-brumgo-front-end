export default function fenceCrossed(distanceArray, radius) {
  const { distance, poiName } = distanceArray[0];
  return [distance < radius, poiName];
}
