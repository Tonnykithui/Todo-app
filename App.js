import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { useState } from "react";
import TodoHeader from "./src/components/TodoHeader";
import styles from "./src/styles/TodoHeader";
import TodoInputComponent from "./src/components/TodoInput";
import TodoBtnComponent from "./src/components/Submit";
import TodoForm from "./src/components/TodoForm";
import { TodoListComponent } from "./src/components/TodoList";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <View
        style={[
          Platform.OS === "android" ? styles.container : SafeAreaView.length,
        ]}
      >
        <TodoHeader />
        <TodoForm />
        <TodoListComponent />
      </View>
    </Provider>
  );
}
