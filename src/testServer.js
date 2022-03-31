import { rest } from "msw";
import { setupServer } from "msw/node";

const mockResponse = {
  results: [
    {
      name: {
        first: "saddeq",
        last: "umar",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      login: {
        username: "sdqumar",
      },
    },
  ],
};
const server = setupServer(
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
