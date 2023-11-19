import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      let task = {
        id: Math.random(),
        content: action.payload.tasks,
      };
      state.push(task);
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
