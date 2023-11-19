import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { useState } from "react";

export default function ButtonComp(params) {
  const [isBtnPressed, setBtnPressed] = useState(false);
  const btnPressed = () => {
    setBtnPressed(!isBtnPressed);
  };
  return (
    <View style={styles.ViewStyle}>
      <TouchableHighlight
        style={[
          styles.BtnStyle,
          { backgroundColor: isBtnPressed ? "blue" : "red" },
        ]}
        onPress={btnPressed}
      >
        <Text style={styles.BtnText}>{isBtnPressed ? "LOADING" : "CLICK"}</Text>
      </TouchableHighlight>
    </View>
  );
}

let styles = StyleSheet.create({
  ViewStyle: {
    alignItems: "center",
  },
  BtnStyle: {
    // backgroundColor: isBtnPressed === true ? "red" : "blue",
    borderRadius: 8,
    padding: 10,
    color: "white",
  },
  BtnText: {
    color: "white",
  },
});
