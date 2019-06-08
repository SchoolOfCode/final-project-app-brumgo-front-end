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
          selected ? { opacity: 0.97 } : { opacity: 0.3 },
          { height: 50, width: "18%" }
        ]}
      >
        <Image source={image} style={styles.icon} />
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default componentName;

const styles = StyleSheet.create({
  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 40,
    width: 40,
    marginBottom: 2
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center"
  }
});
