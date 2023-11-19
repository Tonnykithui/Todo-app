import { StyleSheet, Text, View } from "react-native";
import TodoInputComponent from "./TodoInput";
import TodoBtnComponent from "./Submit";

function TodoForm() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <TodoInputComponent />
    </View>
  );
}
export default TodoForm;
{
  /* <TodoBtnComponent widthLengthInPerc={"100%"} /> */
}
