const mockResponse = {
  data: {
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
  },
};

const data = { get: jest.fn().mockResolvedValue(mockResponse) };
export default data;
