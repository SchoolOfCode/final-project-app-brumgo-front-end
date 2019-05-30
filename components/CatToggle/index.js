import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";

const componentName = ({ image, category, selected, toggleCategory }) => {
  return (
    <TouchableNativeFeedback onPress={toggleCategory} style={styles.container}>
      <View
        style={[
          selected ? { opacity: 0.97 } : { opacity: 0.5 },
          { height: 50, width: "18%" }
        ]}
      >
        <Image source={image} style={styles.icon} />
        <Text>{category}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default componentName;

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    marginBottom: 2
  },
  container: {
    alignContent: "center",
    alignItems: "center"
  }
});
