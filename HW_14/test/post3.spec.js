const axios = require("axios");

describe("block of test", () => {
  test("POST", async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Charls",
        body: "bar",
        userId: 500,
      },
    );
    expect(response.data.body).toContain("bar");
    expect(response.status).toBe(201);
    console.log(response.status);
    console.log(response.data);
  });
});
