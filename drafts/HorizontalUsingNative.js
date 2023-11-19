import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableOpacityComponent,
} from "react-native";
import { useState } from "react";

const HorizontalUsingNative = () => {
  const value = useState(new Animated.Value(0))[0];
  function moveBall() {
    Animated.timing(value, {
      toValue: 200,
      useNativeDriver: false,
      duration: 3000,
    }).start();
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          borderRadius: 100 / 2,
          marginLeft: value,
        }}
      ></Animated.View>
      <TouchableOpacity onPress={moveBall} style={{ backgroundColor: "blue" }}>
        <Text>PRESS TO MOVE BALL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalUsingNative;
