// function TodoItem({ todo, deleteTodo, setTodo }) {
//   return (
//     <li key={todo.id} className="list-group-item">
//       <button onClick={() => deleteTodo(todo.id)}> Delete </button>
//       <button onClick={() => setTodo(todo)}> Edit </button>
//       {todo.title}
//     </li>
//   );
// }
// export default TodoItem;
// // breaks out todo item
// // todo to render
// // event handler to remove todo
// // event handler to select todo

// // invoke delete todo with ID
// // invoke select todo
// // render todo's title


import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
      {todo.title}
    </li>
  );
}
export default TodoItem;