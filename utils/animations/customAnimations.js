import { Animated, Easing, Platform } from "react-native";

export function transition1(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.inOut(Easing.poly(5)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initWidth, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      });

      return { opacity, transform: [{ translateX }] };
    }
  };
}
