import React, { Component } from "react";
import { StyleSheet, Text, Button } from "react-native";
import pois from "../../data/digbethPois";
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    ScaleAnimation
} from "react-native-popup-dialog";
import ReadMore from "../ReadMore";

class PopupDialogue extends Component {
    state = {
        customBackgroundDialog: false,
        defaultAnimationDialog: false,
        scaleAnimationDialog: false,
        slideAnimationDialog: false,
        readMore: true
    };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.poiName !== this.props.poiName &&
      prevProps.isVisible &&
      this.props.isVisible
    ) {
      this.setState(state => ({ ...state, defaultAnimationDialog: false }));
      setTimeout(
        () =>
          this.setState(state => ({ ...state, defaultAnimationDialog: true })),
        500
      );
    }
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState(state => ({
        ...state,
        defaultAnimationDialog: this.props.isVisible
      }));

    }

    render() {
        const { poiName, poiTrivia, extraPoiTrivia } = pois.find(
            obj => obj.poiName === this.props.poiName
        );


        console.log("extra", extraPoiTrivia);

        return (
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
                            backgroundColor: "#F7F7F8"
                        }}
                        hasTitleBar={false}
                        align="left"
                    />
                }
                footer={
                    <DialogFooter>
                        <Button
                            title={this.state.readMore ? "Read +" : "Back"}
                            color="#E12B38"
                            accessibility
                            label="learn more about this site"
                            onPress={() => {
                                this.setState({
                                    readMore: !this.state.readMore
                                });
                            }}
                            key="button-1"
                        />
                        <DialogButton
                            text="AR"
                            bordered
                            onPress={() => {
                                this.setState({
                                    defaultAnimationDialog: false
                                });
                            }}
                            key="button-2"
                        />
                        <DialogButton
                            text="Done"
                            bordered
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
                        backgroundColor: "#F7F7F8"
                    }}
                >
                    <Text>
                        {this.state.readMore ? (
                            poiTrivia
                        ) : (
                            <ReadMore extraPoiTrivia={extraPoiTrivia} />
                        )}
                    </Text>
                </DialogContent>
            </Dialog>
        );
    }
}

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

export default PopupDialogue;
