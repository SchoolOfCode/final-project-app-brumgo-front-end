import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import MapDisplay from "../../components/MapDisplay";
import FlatList from "../../components/FlatList";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF"
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("Map Display", module).add("default view", () => <MapDisplay />);

storiesOf("FlatList", module).add("default view", () => <FlatList />);
