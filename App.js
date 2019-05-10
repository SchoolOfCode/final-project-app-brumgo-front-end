import React from "react";
// import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";
import StoryBook from "./storybook";
import Header from "./components/HeaderSection";

const AppNavigator = createStackNavigator({
    Home: {
        screen: LoadingPage,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: MainAppComponent,
        navigationOptions: {
            header: <Header />
        }
    },

    StoryBook: {
        screen: StoryBook,
        navigationOptions: {
            title: "StoryBook"
        }
    }
});

export default createAppContainer(AppNavigator);
