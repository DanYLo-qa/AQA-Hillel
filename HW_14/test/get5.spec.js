const axios = require("axios");

describe("block of test", () => {
  test("GET", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments",
      {
        params: {
          postId: 15,
        },
      },
    );
    expect(response.status).toBe(200);
    console.log(response.data);
  });
});
