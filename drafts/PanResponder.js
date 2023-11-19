import { useState } from "react";
import {
  PanResponder,
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PanResponderComponent = () => {
  const pan = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    })
  )[0];

  function moveBallToCenter() {
    Animated.timing(pan, {
      toValue: {
        x: 140,
        y: 440,
      },
      useNativeDriver: false,
      delay: 200,
    }).start();
  }
  //   const panResponder = React.useState(
  //     PanResponder.create({
  //       // Ask to be the responder:
  //       onStartShouldSetPanResponder: (evt, gestureState) => true,
  //       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  //       onMoveShouldSetPanResponder: (evt, gestureState) => true,
  //       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

  //       onPanResponderGrant: (evt, gestureState) => {
  //         // The gesture has started. Show visual feedback so the user knows
  //         // what is happening!
  //         // gestureState.d{x,y} will be set to zero now
  //       },
  //       onPanResponderMove: (evt, gestureState) => {
  //         // The most recent move distance is gestureState.move{X,Y}
  //         // The accumulated gesture distance since becoming responder is
  //         // gestureState.d{x,y}
  //       },
  //       onPanResponderTerminationRequest: (evt, gestureState) => true,
  //       onPanResponderRelease: (evt, gestureState) => {
  //         // The user has released all touches while this view is the
  //         // responder. This typically means a gesture has succeeded
  //       },
  //       onPanResponderTerminate: (evt, gestureState) => {
  //         // Another component has become the responder, so this gesture
  //         // should be cancelled
  //       },
  //       onShouldBlockNativeResponder: (evt, gestureState) => {
  //         // Returns whether this component should block native components from becoming the JS
  //         // responder. Returns true by default. Is currently only supported on android.
  //         return true;
  //       },
  //     })
  //   ).current;

  return (
    <View>
      <Animated.View style={[styles.ballView, pan.getLayout()]}></Animated.View>
      <TouchableOpacity
        onPress={moveBallToCenter}
        style={{
          backgroundColor: "red",
          height: 40,
          width: 100,
          position: "absolute",
          marginLeft: 140,
          marginTop: 600,
        }}
      >
        <Text>MOVE ME!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ballView: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default PanResponderComponent;
