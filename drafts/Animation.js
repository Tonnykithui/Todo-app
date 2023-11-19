import { View, Animated, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const HelloWorldAnimation = () => {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];

  const moveBall = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Text>DONE RIGHT!!</Text>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "red",
            borderRadius: 100 / 2,
          }}
        ></View>
        <TouchableOpacity onPress={moveBall}>
          <Text>CLICK TO MOVE</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default HelloWorldAnimation;
