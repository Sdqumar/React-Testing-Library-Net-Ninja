import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const headerElement = screen.getByRole("heading", { name: "todo" });
    expect(headerElement).toBeVisible();
  });
});
