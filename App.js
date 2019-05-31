import React from "react";
// import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { transition1 } from "./utils/animations/customAnimations";

import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";
import StoryBook from "./storybook";
import Login from "./components/LoginApp";
import UserProfile from "./components/UserProfile";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import MainAppWrapper from "./components/MainAppWrapper";

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: LoadingPage,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainAppWrapper,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    // Footer: {
    //   screen: FooterSection,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        header: null
      }
    },
    // Header: {
    //   screen: HeaderSection,
    //   navigationOptions: {
    //     header: null
    //   }
    // },

    StoryBook: {
      screen: StoryBook,
      navigationOptions: {
        title: "StoryBook"
      }
    }
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => transition1(500)
  }
);

export default createAppContainer(AppNavigator);
