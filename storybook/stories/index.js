import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View } from "react-native";
import MapDisplay from "../../components/MapDisplay";
import FlatList from "../../components/FlatList";
import Search from "../../components/Search";
import UserProfile from "../../components/UserProfile";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF"
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("Map Display", module).add("default view", () => <MapDisplay />);
storiesOf("Search", module).add("default view", () => <Search />);
storiesOf("FlatList", module).add("default view", () => <FlatList />);
storiesOf("UserProfile", module).add("default view", () => <UserProfile />);
