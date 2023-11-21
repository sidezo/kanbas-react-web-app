import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  //const API = "http://localhost:4000/a5/todos";   //for local server
  const API = "https://kanbas-node-server-app-t76m.onrender.com/a5/todos";   //for render server

  //const [todo, setTodo] = useState({});   // this is an empty object
  const [errorMessage, setErrorMessage] = useState(null);

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]); // this is an empty array, for promise, updated by fetchTodos

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    console.log("Sending todo data:", todo); // Log the todo data being sent
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id)); //this will return an array so we can map
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    console.log("Sending todo data:", todo); // Log the todo data being sent
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const fetchTodosPromis = () => {
    const promise = axios.get(API); //send out message but i dont' want to wait for it
    //call me back when you get a response
    //promise is a callback
    promise.then((response) => {
      //old syntax
      console.log(response.data); //data is the array of todos
      setTodos(response.data); //setTodos is a function that will update the todos
    });
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data); //then object ID would be displayed in the input field
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data); //here we need seTodos, since we are updating the whole array
    //it will be mapped to the list, in the server, res.json(todos)
  };

  useEffect(() => {
    //fetchTodosPromis();
    fetchTodos(); //sets todo
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <hr />
      <h4>Todos from server, fetchTodos</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        className="form-control"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <textarea
        className="form-control"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <input
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button className="btn btn-warning mb-2 w-100" onClick={postTodo}>
        Post Todo
      </button>
      <button className="btn btn-dark mb-2 w-100" onClick={updateTodo}>
        Update Todo
      </button>
      <button className="btn btn-primary mb-2 w-100" onClick={createTodo}>
        Create Todo
      </button>

      <button className="btn btn-success mb-2 w-100" onClick={updateTitle}>
        Update Title
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
      <ul className="list-group">
        {todos.map(
          (
            todoObject //iterating todo objects not todo defined above
          ) => (
            <li className="list-group-item" key={todoObject.id}>
              <div
                onClick={() => fetchTodoById(todoObject.id)}
                className="btn btn-warning me-2 float-end"
              >
                Edit
              </div>
              <div
                className="btn btn-danger float-end" //this way we remove correcsponding todoObject
                onClick={() => removeTodo(todoObject)} //here cannot pass todo, otherwise just remove the first one
              >
                Remove
              </div>
              <div
                onClick={() => deleteTodo(todoObject)}
                className="btn btn-danger float-end"
              >
                Delete
              </div>

              <input checked={todoObject.completed} type="checkbox" readOnly />
              {todoObject.title}
              <p>{todoObject.description}</p>
              <p>{todoObject.due}</p>
            </li>
          )
        )}
      </ul>

      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id} // this will be undefined, since useState is an empty object
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Filtering Array Items</h4>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <h4>Deleting from an Array</h4>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <h4>Updating an Item in an Array</h4>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <br />
      <h4 style={{ color: "red" }}>ExtraCredit 3.3.7</h4>
      <input
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <h4> Updating description</h4>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2"
      >
        Update description to: {todo.description}
      </a>
      <br />
      <br />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        {/* Update todo (id:{todo.id}) to {todo.completed.toString()} status */}
        Update todo (id:{todo.id}) to {todo.completed ? "true" : "false"} status
      </a>
      <input
        type="checkbox"
        checked={todo.completed} //initially set to false
        onChange={
          (e) => setTodo({ ...todo, completed: e.target.checked }) //when checked, it sets the assignment to true
        }
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor="completedCheckbox">
        Todo id:{todo.id} Completed
      </label>
    </div>
  );
}
export default WorkingWithArrays;
