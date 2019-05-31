import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Button
} from "react-native";
import { Marker, Callout } from "react-native-maps";
import pois from "../../data/digbethPois";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  ScaleAnimation
} from "react-native-popup-dialog";
import ReadMore from "../ReadMore";
import iconSet from "../../assets/images/icons/iconSet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18
  },
  navigationBar: {
    borderBottomColor: "#b5b5b5",
    borderBottomWidth: 0.5,
    backgroundColor: "#ffffff"
  },
  navigationTitle: {
    padding: 10
  },
  navigationButton: {
    padding: 10
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40
  },
  navigator: {
    flex: 1
  },
  customBackgroundDialog: {
    opacity: 0.5,
    backgroundColor: "#000"
  }
});

keyExtractor = (item, index) => index.toString();

export default class PinMarkerDetached extends React.Component {
  state = {
    customBackgroundDialog: false,
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false,
    readMore: true
  };

  render() {
    const {
      poiName,
      poiLocation,
      category,
      poiTrivia,
      extraPoiTrivia,
      urlExtra
    } = this.props.poi;
    return (
      <Marker
        key={this.props.key}
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
            this.setState({
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
            this.setState({
              scaleAnimationDialog: false
            });
            return true;
          }}
          onDismiss={() => {
            this.setState({
              defaultAnimationDialog: false
            });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
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
                text={this.state.readMore ? "Read More" : "Back"}
                textStyle={{ color: "#E12B38"}}
                activeOpacity={0.6}
                onPress={() => {
                  this.setState({
                    readMore: !this.state.readMore
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
                  this.setState({
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
              margin: 10, 
            }}
          >
            <Text>
              {this.state.readMore ? (
                poiTrivia
              ) : (
                <ReadMore extraPoiTrivia={extraPoiTrivia} urlExtra={urlExtra} />
              )}
            </Text>
          </DialogContent>
        </Dialog>
      </Marker>
    );
  }
}
