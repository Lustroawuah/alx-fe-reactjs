import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;