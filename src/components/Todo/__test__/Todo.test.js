import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: "Add" });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe("Todo", () => {
  it("should render a added task", () => {
    render(<MockedTodo />);
    addTask(["go pc shopping"]);
    const divElement = screen.getByText(/go pc shopping/i);
    expect(divElement).toBeVisible();
  });

  it("should render multiple tasks", () => {
    render(<MockedTodo />);
    addTask(["go pc shopping", "wash car", "learn react testing"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("should not have completed class when intially renderd", () => {
    render(<MockedTodo />);
    addTask(["go pc shopping", "wash car", "learn react testing"]);
    const divElement = screen.getByText(/go pc shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should have completed class when clicked", () => {
    render(<MockedTodo />);
    addTask(["go pc shopping", "wash car", "learn react testing"]);
    const divElement = screen.getByText(/go pc shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
