import React, { Component } from "react";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {StyleSheet, Button, View } from 'react-native'


export default class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = { visible: false }
        render() {
            return(
<View style={styles.container}>
  <Button
    title="Show Dialog"
    onPress={() => {
      this.setState({ visible: true });
    }}
  />
  <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>
    </DialogContent>
  </Dialog>
</View>

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
});
