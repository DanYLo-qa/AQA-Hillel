const axios = require("axios");

describe ("block of test", () => {
    test ("first test", async() =>{
     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
     console.log(response.status);
     expect(response.status).toBe(200);
    })
})