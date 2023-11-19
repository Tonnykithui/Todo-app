import { View, Text } from "react-native";
import styles from "../styles/TodoHeader";

export const TodoHeader = (params) => {
  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
    </View>
  );
};

export default TodoHeader;
