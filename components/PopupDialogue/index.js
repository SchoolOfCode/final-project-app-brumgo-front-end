import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import pois from "../../data/digbethPois";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  ScaleAnimation
} from "react-native-popup-dialog";

class PopupDialogue extends Component {
  state = {
    customBackgroundDialog: false,
    defaultAnimationDialog: false,
    scaleAnimationDialog: false,
    slideAnimationDialog: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.inFence !== this.props.inFence) {
      this.setState(state => ({
        ...state,
        defaultAnimationDialog: this.props.inFence
      }));
    }
  }

  render() {
    const { poiName, poiTrivia } = pois.find(
      obj => obj.poiName === this.props.poiName
    );

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
          <Text>{poiTrivia}</Text>
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
