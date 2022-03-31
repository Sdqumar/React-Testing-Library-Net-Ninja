import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Followers from "../Followers";
const MockedFollowers = () => {
  return (
    <BrowserRouter>
      <Followers />
    </BrowserRouter>
  );
};
describe("Followers", () => {
  it("should render first follower", async () => {
    render(<MockedFollowers />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeVisible();
  });
  //   it("should render multiple follower items", async () => {
  //     render(<MockedFollowers />);
  //     const followerDivElement = await screen.findAllByTestId(/follower-item-/i);
  //     expect(followerDivElement.length).toBe(5);
  //   });
});
