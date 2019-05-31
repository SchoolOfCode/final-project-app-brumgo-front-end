import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import FooterSection from "../FooterSection";
import Search from "../Search";

export default function ViewContainer(props) {
  const [searching, setSearching] = useState(false);
  return (
    <View style={styles.container}>
      {props.children}
      <View style={styles.search}>{searching && <Search />}</View>
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
    bottom: 55,
    left: 0,
    // marginTop: -50,
    width: "100%",
    position: "absolute"
  }
});
