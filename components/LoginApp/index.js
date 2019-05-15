import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button, Input, Icon } from "react-native-elements";

export default class LoginApp extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../LoadingPage/brum.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Input
            leftIcon={
              <Icon
                name="envelope"
                type="font-awesome"
                color="#FCC133"
                size={25}
              />
            }
            containerStyle={{ marginVertical: 10 }}
            inputStyle={{ marginLeft: 10, color: "white" }}
            keyboardAppearance="light"
            placeholder="Email"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholderTextColor="white"
          />

          <Input
            leftIcon={
              <Icon name="lock" type="font-awesome" color="#FCC133" size={27} />
            }
            containerStyle={{ marginVertical: 10 }}
            inputStyle={{ marginLeft: 10, color: "white" }}
            keyboardAppearance="light"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="done"
            placeholderTextColor="white"
          />

          <Button
            title="LOG IN"
            activeOpacity={1}
            underlayColor="transparent"
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              height: 50,
              width: 250,
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30
            }}
            containerStyle={{ marginVertical: 10 }}
            titleStyle={{ fontWeight: "bold", color: "white" }}
          />
        </View>

        <View style={styles.container}>
          <Input
            leftIcon={
              <Icon
                name="user-o"
                type="font-awesome"
                color="#FCC133"
                size={25}
              />
            }
            containerStyle={{ marginVertical: 10 }}
            inputStyle={{ marginLeft: 10, color: "white" }}
            keyboardAppearance="light"
            placeholder="Name"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            placeholderTextColor="white"
          />

          <Input
            leftIcon={
              <Icon
                name="envelope"
                type="font-awesome"
                color="#FCC133"
                size={25}
              />
            }
            containerStyle={{ marginVertical: 10 }}
            inputStyle={{ marginLeft: 10, color: "white" }}
            keyboardAppearance="light"
            placeholder="Email"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholderTextColor="white"
          />

          <Input
            leftIcon={
              <Icon name="lock" type="font-awesome" color="#FCC133" size={25} />
            }
            containerStyle={{ marginVertical: 10 }}
            inputStyle={{ marginLeft: 10, color: "white" }}
            keyboardAppearance="light"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="done"
            placeholderTextColor="white"
          />

          <Button
            title="SIGN UP"
            activeOpacity={1}
            underlayColor="transparent"
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              height: 50,
              width: 250,
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30
            }}
            containerStyle={{ marginVertical: 10 }}
            titleStyle={{ fontWeight: "bold", color: "white" }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FCC133",
    borderRadius: 20
  },
  footerView: {
    flex: 1
  }
});
