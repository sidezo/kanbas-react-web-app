import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [
        ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map(
        (item) => (item.id === action.payload.id ? action.payload : item) //This line is a conditional (ternary) operator that
        // checks whether the id of the current item (current todo)
        // is equal to the id of the todo contained in action.payload.
        //If the id matches (item.id === action.payload.id), it means we've found the
        //todo we want to update. In this case, it returns action.payload, effectively
        //replacing the existing todo with the new data.
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
