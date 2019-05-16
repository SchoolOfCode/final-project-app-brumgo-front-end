import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Login from "../LoginApp/login";
import Register from "../LoginApp/register";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Register />
      </View>
    );
  }
}

const TabNavigation = createMaterialBottomTabNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: Register }
});

export default createAppContainer(TabNavigation);
