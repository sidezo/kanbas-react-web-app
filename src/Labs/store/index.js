import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";



const store = configureStore({
  reducer: {
    counterReducer,
    helloReducer,  // this is the same as helloReducer: helloReducer, it contains message: "Hello World"
    addReducer,
    todosReducer,
  },
});
export default store;
