import React from "react";
import TodoList from "./components/TodoList";
import AddTodoForm  from "./components/AddTodoForm";
import TodoItem from "./components/TodoItems";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <AddTodoForm/>
      <TodoItem/>
    </div>
  );
}

export default App;