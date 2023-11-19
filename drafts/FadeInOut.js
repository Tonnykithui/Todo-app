import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableOpacityComponent,
} from "react-native";
import { useState } from "react";

const FadeUsingNative = () => {
  const value = useState(new Animated.Value(0))[0];
  function fadeIn() {
    Animated.timing(value, {
      toValue: 1,
      useNativeDriver: true,
      duration: 3000,
    }).start();
  }

  function fadeOut() {
    Animated.timing(value, {
      toValue: 0,
      useNativeDriver: true,
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
          //   marginLeft: value,
          opacity: value,
        }}
      ></Animated.View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={fadeIn}
          style={{ backgroundColor: "blue", width: 80, padding: 8 }}
        >
          <Text style={{ color: "white" }}>PRESS TO FADE IN BALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={fadeOut}
          style={{ backgroundColor: "red", width: 80, padding: 8 }}
        >
          <Text style={{ color: "white" }}>PRESS TO FADE OUT BALL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FadeUsingNative;
