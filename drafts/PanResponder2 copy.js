import { useState } from "react";
import { View, PanResponder, Animated } from "react-native";

const PanResponder2 = (params) => {
  const pan = useState(new Animated.ValueXY(0))[0];

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("PAN RESPONDER GRANTED ACCESS!!!");
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  )[0];
  console.log(panResponder.panHandlers);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: "red",
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      ></Animated.View>
    </View>
  );
};

export default PanResponder2;
