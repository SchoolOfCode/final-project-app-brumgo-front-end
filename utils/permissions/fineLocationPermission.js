import { PermissionsAndroid } from "react-native";

export default async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "brumGo location request",
        message: `brumGo needs access to your device's location to help find your way around our fantastic city`,
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Fine location");
    } else {
      console.log("Fine Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
