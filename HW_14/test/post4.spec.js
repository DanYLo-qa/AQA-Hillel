const axios = require("axios");

describe ("block of test", () => {
    test ("POST", async() =>{
     const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        {
            title:'bishop',
            body: 'charch',
            userId: 1.618,
        }
     );
     expect(response.data.userId).toBe(1.618);
     expect(response.status).toBe(201);
     console.log(response.status);
     console.log(response.data);
    })
})