import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Test 1: Verify initial render
  test("renders initial todos", () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master React Hooks")).toBeInTheDocument();
  });

  // Test 2: Verify adding a new todo
  test("adds a new todo", () => {
    render(<TodoList />);

    // Simulate user input
    const input = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(input, { target: { value: "New Todo" } });

    // Simulate form submission
    const addButton = screen.getByText("Add Todo");
    fireEvent.click(addButton);

    // Check if the new todo is added
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test 3: Verify toggling a todo
  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);

    // Find the first todo
    const todo = screen.getByText("Learn React");

    // Check initial state (not completed)
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // Simulate clicking the todo to toggle completion
    fireEvent.click(todo);

    // Check if the todo is completed
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Simulate clicking the todo again to toggle back
    fireEvent.click(todo);

    // Check if the todo is not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  // Test 4: Verify deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);

    // Find the first todo
    const todo = screen.getByText("Learn React");

    // Find the delete button for the first todo
    const deleteButton = screen.getAllByText("Delete")[0];

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Check if the todo is deleted
    expect(todo).not.toBeInTheDocument();
  });
});