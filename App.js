import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";

const AppNavigator = createStackNavigator(
    {
        Home: LoadingPage,
        Main: MainAppComponent
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);
