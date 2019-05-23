import React, { useContext } from "react";
import { Text, Image, View, StyleSheet } from "react-native";

import CatToggle from "../CatToggle";
import iconSet from "../../assets/images/icons/iconSet";

const CategoryToggles = ({ searchTerms, setSearchTerms }) => {
  let { categories } = searchTerms;

  const toggleCategory = category => {
    if (categories.includes(category)) {
      let catIndex = categories.indexOf(category);
      let newCategories = [
        ...categories.slice(0, catIndex),
        ...categories.slice(catIndex + 1)
      ];
      setSearchTerms({ categories: newCategories });
    } else {
      setSearchTerms({ categories: [...categories, category] });
    }
  };
  return (
    <View style={styles.container}>
      {Object.keys(iconSet).map(key => {
        return (
          <CatToggle
            keyExtractor={key}
            image={iconSet[key]}
            category={key}
            selected={searchTerms.categories.includes(key)}
            toggleCategory={() => toggleCategory(key)}
          />
        );
      })}
    </View>
  );
};

export default CategoryToggles;

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
