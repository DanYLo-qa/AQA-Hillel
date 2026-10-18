const axios = require("axios");

describe("block of test", () => {
  test("first test", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    expect(response.statusText).toContain("OK");
  });
});
