import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import * as firebase from "firebase";

///this function does nothing in the UI currently
// also a class component!

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    };
  }
  SignIn = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(function(user){
        if (user){

        }
        console.log(user)
      })
    }
    catch(error)
    {
console.log(error.toString(error))
    }
  };
  render() {
    return (
      <ImageBackground
        source={require("../LoadingPage/brum.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>

          <View style={styles.title}>
            <Text style={styles.header}>LOGIN</Text>
          </View>
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
                onChangeText={email => this.setState({ email })}
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
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
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
                onPress={() => this.SignIn(this.state.email, this.state.password)}
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
                    color="#E12B38"
            />
          }
                titleStyle={{ fontSize: 15, color: "#E12B38", fontWeight: "bold" }}
                buttonStyle={{
                  height: 45,
                  width: 150,
                  borderRadius: 60,
                  backgroundColor: "#FFFFFF",
              
                }}
                containerStyle={{ marginVertical: 10, opacity: 0.9, padding: 5 }}
              />
              <Button
                title="   twitter"
                icon={
                  <Icon
                    name="twitter"
                    type="font-awesome"
                    size={15}
                    color="#E12B38"
                  />
                }
                titleStyle={{ fontSize: 15, color: "#E12B38", fontWeight: "bold" }}
                buttonStyle={{
                  height: 45,
                  width: 150,
                  borderRadius: 60,
                  backgroundColor: "#FFFFFF",
                
            }}
                containerStyle={{ marginVertical: 10, opacity: 0.9, padding: 5 }}
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
  logo: {
    width: 100,
    height: 100,
    marginLeft: "65%",
    marginTop: "-45%",
    zIndex: -1,
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
