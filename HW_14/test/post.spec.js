const axios = require("axios");

describe ("block of test", () => {
    test ("POST", async() =>{
     const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        { 
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        expect(response.status).toBe(201);
        console.log(response.data);
    })
})