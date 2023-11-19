import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

export const TodoListComponent = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTaskFn = (item) => {
    dispatch(
      deleteTask({
        id: item,
      })
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderRadius: 5,
          backgroundColor: "lightgrey",
          marginTop: 5,
          width: "100%",
          // display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Text>{item.content}</Text>
        <TouchableOpacity onPress={() => deleteTaskFn(item.id)}>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // scrollEnabled={true}
      />
    </View>
  );
};

export default TodoListComponent;
