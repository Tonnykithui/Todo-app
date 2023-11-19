import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const MoveHorizontally = () => {
  let value = useState(new Animated.Value(0))[0];

  let moveBall = () => {
    Animated.timing(value, {
      toValue: 100,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.View
        style={{
          backgroundColor: "red",
          borderRadius: 100 / 2,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: value,
          // opacity: value,
        }}
      >
        <Text>HELLO</Text>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <View
          style={{
            backgroundColor: "blue",
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>CLICK!!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MoveHorizontally;
