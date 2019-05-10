import React from "react";
// import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { springFromLeft } from "./utils/animations/customAnimations";

import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";
import StoryBook from "./storybook";
import Header from "./components/HeaderSection";

const AppNavigator = createStackNavigator(
  {
    Home: LoadingPage,
    Main: MainAppComponent,
    StoryBook: StoryBook
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => springFromLeft(500),
    defaultNavigationOptions: {
      header: <Header />
    }
  }
);

export default createAppContainer(AppNavigator);
