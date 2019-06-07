import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

import { PoiContext } from "../PoiContextProvider";

import CategoryToggles from "../CategoryToggles";

export default function Search(props) {
  const [{ searchTerms }, { setSearchAndFilter }] = useContext(PoiContext);

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.header}>Filter by Category</Text>
      <CategoryToggles
        searchTerms={searchTerms}
        setSearchTerms={setSearchAndFilter}
      />
      <View>
        <Text style={styles.header}>Search by Name</Text>
        <SearchBar
          inputStyle={{ color: "#000" }}
          lightTheme
          round
          placeholder="Searching for..."
          onChangeText={val => setSearchAndFilter({ nameSearch: val })}
          value={searchTerms.nameSearch}
          containerStyle={{
            height: 60,
            backgroundColor: "#E12B38",
            borderTopColor: "#E12B38"
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: "#E12B38",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  header: {
    textAlign: "center",
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 5
  }
});
