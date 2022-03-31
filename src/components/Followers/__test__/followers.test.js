import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { server, rest } from "../../../testServer";
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
  it("should handle error", async () => {
    server.use(
      rest.get("https://randomuser.me/api/", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    render(<MockedFollowers />);
    const headingElement = await screen.findByText(/network error/i);
    expect(headingElement).toBeVisible();
  });
});
