const axios = require("axios");

describe("block of test", () => {
  test("POST", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "David",
        body: "bar",
        userId: 2,
      },
    );
    expect(response.data.title).toContain("David");
    console.log(response.data);
  });
});
