import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Login from "../LoginApp/login";
import Register from "../LoginApp/register";

const LoginScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
};

const RegisterScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <Register />
    </View>
  );
};

const TabNavigation = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" type="font-awesome" color={tintColor} size={24} />
        )
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        tabBarLabel: "No Account? Register Here",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Login",
    activeTintColor: "#E12B38",
    inactiveTintColor: "#FFFFFF",
    barStyle: { backgroundColor: "#D3D3D3" }
  }
);

export default createAppContainer(TabNavigation);
