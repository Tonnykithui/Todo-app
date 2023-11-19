import { View, TextInput, Text } from "react-native";
import todoInputstyles from "../styles/TodoInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/taskSlice";

const TodoInputComponent = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onSubmitBtn = () => {
    if (todo === "") {
      alert("Please add a todo");
      setTodo("");
      return;
    }

    dispatch(
      addTodo({
        tasks: todo,
      })
    );

    setTodo("");
  };
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 50,
        }}
      >
        <TextInput
          style={todoInputstyles.todoInput}
          placeholder="Add your Todo"
          onChangeText={setTodo}
          value={todo}
        />
      </View>
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 8,
          padding: 0,
          marginTop: 10,
          width: "100%",
        }}
      >
        <Text
          onPress={onSubmitBtn}
          style={{
            alignSelf: "center",
            color: "white",
            fontSize: 20,
            padding: 10,
            // width: "100%",
          }}
        >
          Submit
        </Text>
      </View>
    </View>
  );
};

export default TodoInputComponent;
