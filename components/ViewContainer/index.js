import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import posed from "react-native-pose";

import { PoiContext } from "../PoiContextProvider";

import FooterSection from "../FooterSection";
import Search from "../Search";

const SearchBox = posed.View({
  visible: {
    transition: { useNativeDriver: true },
    translateY: 0
  },
  hidden: {
    transition: { useNativeDriver: true },
    translateY: 170
  }
});

export default function ViewContainer(props) {
  const [{ searching }, { setSearching }] = useContext(PoiContext);
  return (
    <View style={styles.container}>
      {props.children}
      <SearchBox
        pose={searching ? "visible" : "hidden"}
        style={styles.search}
        useNativeDriver
      >
        <Search />
      </SearchBox>
      <View style={styles.footer}>
        <FooterSection
          searchingToggle={() => setSearching(!searching)}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },

  map: {
    height: "90%",
    width: "100%"
  },
  list: {
    height: "90%",
    width: "100%"
  },
  footer: {
    height: "10%",
    width: "100%"
  },
  search: {
    bottom: "9.7%",
    left: 0,
    width: "100%",
    position: "absolute"
  }
});
