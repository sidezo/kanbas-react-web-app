import Nava from "../../Nava";
import Add from "./Add";
import Classes from "./Classes";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import DynamicStyling from "./DynamicStyling";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
function Assignment3() {
  return (
    <div className="container">
      <Nava />
      <h2>Assignment 3</h2>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <DynamicStyling />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
