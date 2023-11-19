import { Animated, PanResponder, View, Button } from "react-native";
import { useState } from "react";

const PanResponder3 = ({ navigation }) => {
  const pan = useState(new Animated.ValueXY(0))[0];
  // console.log("THIS IS THE PAN", pan);
  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("THIS IS THE PAN", pan);
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
  return (
    <View>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            borderRadius: 100 / 2,
            backgroundColor: "blue",
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      ></Animated.View>
      <Button
        title="Go to LOGIN"
        onPress={() => navigation.navigate("Login")}
      ></Button>
    </View>
  );
};

export default PanResponder3;
