import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from "react-native";
// import { Marker, Callout } from "react-native-maps";
import pois from "../../data/digbethPois";
import PinMarkerDetached from "../PinMarkerDetached";
// import Dialog, {
//     DialogTitle,
//     DialogContent,
//     DialogFooter,
//     DialogButton,
//     ScaleAnimation
// } from "react-native-popup-dialog";

// const iconSet = {
//     Building: require("./Building.png"),
//     Culture: require("./Culture.png"),
//     Market: require("./Market.png"),
//     Event: require("./Event.png")
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     dialogContentView: {
//         paddingLeft: 18,
//         paddingRight: 18
//     },
//     navigationBar: {
//         borderBottomColor: "#b5b5b5",
//         borderBottomWidth: 0.5,
//         backgroundColor: "#ffffff"
//     },
//     navigationTitle: {
//         padding: 10
//     },
//     navigationButton: {
//         padding: 10
//     },
//     navigationLeftButton: {
//         paddingLeft: 20,
//         paddingRight: 40
//     },
//     navigator: {
//         flex: 1
//     },
//     customBackgroundDialog: {
//         opacity: 0.5,
//         backgroundColor: "#000"
//     }
// });

keyExtractor = (item, index) => index.toString();

export default class PinMarker extends React.Component {
    // state = {
    //     customBackgroundDialog: false,
    //     defaultAnimationDialog: false,
    //     scaleAnimationDialog: false,
    //     slideAnimationDialog: false
    // };

    render() {
        return (
            <View>
                {pois.map((item, idx) => {
                    return <PinMarkerDetached poi={item} />;
                })}
            </View>
        );
    }
}

/* <Marker
                            key={idx}
                            title={item.poiName}
                            coordinate={{
                                latitude: item.poiLocation.lat,
                                longitude: item.poiLocation.lng
                            }}
                        >
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={iconSet[item.category]}
                            />
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
                                    {item.poiName}
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
                                        title={item.poiName}
                                        style={{
                                            backgroundColor: "#F7F7F8"
                                        }}
                                        hasTitleBar={false}
                                        align="left"
                                    />
                                }
                                footer={
                                    <DialogFooter>
                                        <DialogButton
                                            text="AR"
                                            bordered
                                            onPress={() => {
                                                this.setState({
                                                    defaultAnimationDialog: false
                                                });
                                            }}
                                            key="button-1"
                                        />
                                        <DialogButton
                                            text="Back"
                                            bordered
                                            onPress={() => {
                                                this.setState({
                                                    defaultAnimationDialog: false
                                                });
                                            }}
                                            key="button-2"
                                        />
                                    </DialogFooter>
                                }
                            >
                                <DialogContent
                                    style={{
                                        backgroundColor: "#F7F7F8"
                                    }}
                                >
                                    <Text>{item.poiTrivia}</Text>
                                </DialogContent>
                            </Dialog>
                        </Marker> */
