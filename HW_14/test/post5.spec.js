const { default: axios } = require("axios")

describe ("tests", ()=>{
test ("POST", async()=>{
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
        {
            title:'foo',
            body: 'bar',
            userId: 1,
        }
    );
    expect(response.status).toBe(201);
    console.log(response.status);
    console.log(response.data.userId);
} )
})