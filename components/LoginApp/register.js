import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Alert
} from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import * as firebase from "firebase";
import NavigationContext from "../NavigationContext";
/// this is the config info for firebase

var config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXX",
  authDomain: "brumgo-c44e3.firebaseapp.com",
  databaseURL: "https://brumgo-c44e3.firebaseio.com",
  projectId: "brumgo-c44e3",
  storageBucket: "brumgo-c44e3.appspot.com",
  messagingSenderId: "46252155412",
  appID: "1:46252155412:android:847adb53adba91c8"
};

firebase.initializeApp(config);

// this is currently a class component, I don't know how to make it functional using hooks. Do we need to??

export default function Register(props) {
  const navigation = useContext(NavigationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /// this is the signup logic for firebase. To register firebase will only take email and password not name.
  /// there is an onPress function below which registers the user. Once the User is registered nothing happens in the UI
  /// will need add a message to say 'great! you've signed up'
  // will need to direct user to Login or User Profile.

  const SignUp = (email, password) => {
    try {
      if (password.length < 6) {
        alert("please enter at least 6 characters");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(currentUser => {
          console.log(currentUser);
        })
        .then(() =>
          Alert.alert(
            "Signup Successful",
            "please Sign in on the next screen",
            [
              {
                text: "Sign In",
                onPress: () => props.navigation.navigate("Login")
              }
            ],
            { cancelable: false }
          )
        );
      console.log(currentUser);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  return (
    <ImageBackground
      source={require("../LoadingPage/brum.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.title}>
          <Text style={styles.header}>REGISTER</Text>
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
                  name="user"
                  type="font-awesome"
                  color="#FFFFFF"
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
              onChangeText={email => setEmail({ email })} //why in an object???
              value={email}
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
              onChangeText={password => setPassword({ password })} // Object???
              value={password}
            />

            <Button
              title="SIGN UP"
              activeOpacity={1}
              underlayColor="transparent"
              loadingProps={{ size: "small", color: "#FFFFFF" }}
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
                color: "white",
                fontSize: 15
              }}
              onPress={() => SignUp(email, password)}
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
              titleStyle={{
                fontSize: 15,
                color: "#E12B38",
                fontWeight: "bold"
              }}
              buttonStyle={{
                height: 45,
                width: 150,
                borderRadius: 60,
                backgroundColor: "#FFFFFF"
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
              titleStyle={{
                fontSize: 15,
                color: "#E12B38",
                fontWeight: "bold"
              }}
              buttonStyle={{
                height: 45,
                width: 150,
                borderRadius: 60,
                backgroundColor: "#FFFFFF"
              }}
              containerStyle={{ marginVertical: 10, opacity: 0.9, padding: 5 }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: "65%",
    marginTop: "-35%",
    zIndex: -1
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
