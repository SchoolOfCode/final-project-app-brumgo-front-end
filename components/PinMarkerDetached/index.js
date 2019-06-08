import React, { useState, useContext } from "react";
import { Image, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  ScaleAnimation
} from "react-native-popup-dialog";

import { PoiContext } from "../PoiContextProvider";

import iconSet from "../../assets/images/icons/iconSet";

export default function PinMarkerDetached(props) {
  const [{ directionsData }, { setDestination }] = useContext(PoiContext);

  const [state, setState] = useState({
    customBackgroundDialog: false,
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
    readMore: true
  });

  const { poiName, poiLocation, category, poiTrivia } = props.poi;
  return (
    <Marker
      key={props.key}
      title={poiName}
      coordinate={{
        latitude: poiLocation.lat,
        longitude: poiLocation.lng
      }}
    >
      <Image style={{ height: 20, width: 20 }} source={iconSet[category]} />
      <Callout
        style={{
          width: 100,
          backgroundColor: "#ffffff"
        }}
        tooltip={false}
        onPress={() => {
          setState({
            ...state,
            defaultAnimationDialog: true
          });
        }}
      >
        <Text
          style={{
            fontWeight: "bold"
          }}
        >
          {poiName}
        </Text>
      </Callout>

      <Dialog
        overlayBackgroundColor={"rgba(0, 0, 0, 0.3)"}
        dialogAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
          console.log("onHardwareBackPress");
          setState({
            ...state,
            scaleAnimationDialog: false
          });
          return true;
        }}
        onDismiss={() => {
          setState({ ...state, defaultAnimationDialog: false });
        }}
        width={0.9}
        visible={state.defaultAnimationDialog}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title={poiName}
            style={{
              backgroundColor: "#FFFFFF",
              margin: 10,
              color: "#FCC133"
            }}
            hasTitleBar={true}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text={`Navigate to`}
              textStyle={{ color: "#E12B38" }}
              activeOpacity={0.6}
              onPress={() => {
                setDestination({
                  latitude: poiLocation.lat,
                  longitude: poiLocation.lng
                });
                setState({
                  ...state,
                  defaultAnimationDialog: false,
                  readMore: true
                });
              }}
              key="button-1"
            />
            <DialogButton
              text="Done"
              bordered
              textStyle={{ color: "#E12B38" }}
              activeOpacity={0.6}
              onPress={() => {
                setState({
                  ...state,
                  defaultAnimationDialog: false,
                  readMore: true
                });
              }}
              key="button-3"
            />
          </DialogFooter>
        }
      >
        <DialogContent
          style={{
            backgroundColor: "#FFFFFF",
            margin: 10
          }}
        >
          <Text>{poiTrivia}</Text>
        </DialogContent>
      </Dialog>
    </Marker>
  );
}
