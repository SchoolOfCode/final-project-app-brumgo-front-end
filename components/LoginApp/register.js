import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Button, Input, Icon } from "react-native-elements";

export default class Register extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../LoadingPage/brum.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.header}>REGISTER</Text>
            </View>

            <View style={styles.bottom}>
              <Input
                leftIcon={
                  <Icon
                    name="user"
                    type="font-awesome"
                    color="#FCC133"
                    size={27}
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
                  <Icon
                    name="lock"
                    type="font-awesome"
                    color="#FCC133"
                    size={33}
                  />
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
                loadingProps={{ size: "small", color: "#FCC133" }}
                buttonStyle={{
                  height: 45,
                  width: 325,
                  backgroundColor: "transparent",
                  borderWidth: 3,
                  borderColor: "#FCC133",
                  borderRadius: 60
                }}
                containerStyle={{ marginVertical: 10, margin: 23 }}
                titleStyle={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 15
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  header: {
    fontSize: 30,
    letterSpacing: 2,
    color: "#FCC133",
    justifyContent: "flex-end",
    margin: 23,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  buttom: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(152,152,152,0.7)"
  }
});
