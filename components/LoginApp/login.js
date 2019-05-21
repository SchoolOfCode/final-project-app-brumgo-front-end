import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import { Button, Input, Icon } from "react-native-elements";


export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../LoadingPage/brum.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>

          
          <View style={styles.container}>

      
            <View style={styles.top}>
              <Image
                style={styles.logo}
                source={require("../LoadingPage/brumGoLogoRed.png")}
              />
            </View>



            <View style={styles.bottom}>
              <Input
                leftIcon={
                  <Icon
                    name="envelope"
                    type="font-awesome"
                    color="#FFFFFF"
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
                    color="#FFFFFF"
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
                title="LOGIN"
                activeOpacity={1}
                underlayColor="transparent"
                buttonStyle={{
                  height: 45,
                  width: 325,
                  backgroundColor: "transparent",
                  borderWidth: 3,
                  borderColor: "#FFFFFF",
                  borderRadius: 60
                }}
             
                containerStyle={{ marginVertical: 10, margin: 23 }}
                titleStyle={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  fontSize: 15
                }}
              />
            </View>



            <View style={styles.social}>
              <Button
                title="   facebook"
                icon={
                  <Icon
                    name="facebook"
                    type="font-awesome"
                    size={15}
                    color="rgba(225, 45, 58, 0.9)"
            />
          }
                titleStyle={{ fontSize: 15, color: "rgba(225, 45, 58, 0.9)", fontWeight: "bold" }}
                buttonStyle={{
                  height: 45,
                  width: 150,
                  borderRadius: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 3,
                  borderColor: "#FFFFFF",
                }}
                containerStyle={{ marginVertical: 10, opacity: 0.8, padding: 5 }}
              />
              <Button
                title="   twitter"
                icon={
                  <Icon
                    name="twitter"
                    type="font-awesome"
                    size={15}
                    color="rgba(225, 45, 58, 0.9)"
                  />
                }
                titleStyle={{ fontSize: 15, color: "rgba(225, 45, 58, 0.9)", fontWeight: "bold" }}
                buttonStyle={{
                  height: 45,
                  width: 150,
                  borderRadius: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 3,
                  borderColor: "#FFFFFF",
            }}
                containerStyle={{ marginVertical: 10, opacity: 0.8, padding: 5 }}
              />
            </View>
          </View>
          <View style={styles.title}>
            <Text style={styles.header}>LOGIN</Text>
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
  logo: {
    width: 100,
    height: 100,
    opacity: 0.9,
    marginLeft: "65%",
    marginTop: "-45%",
  },
  header: {
    fontSize: 30,
    letterSpacing: 2,
    color: "#E12B38",
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 28
  },
title: {
height: 60,
width: "100%",
backgroundColor: "#FFFFFF"
},
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(152,152,152,0.7)"
  },
  social: {
    flexDirection: "row",
    marginLeft: 25
  }
});
