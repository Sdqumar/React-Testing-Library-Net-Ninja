import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />;
    </BrowserRouter>
  );
};
describe("TodoFooter", () => {
  it("should render the correct number of incomplete task", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeVisible();
  });

  it("should render 'task' when incomplete tasks is less than less than two", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/task left/i);
    expect(paragraphElement).toBeVisible();
  });
});
