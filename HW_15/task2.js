const axios = require('axios');

async function RequestWithHeadersAndParams() {
   
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            userId: 1 
        },
        headers: {
            'Authorization': 'Bearer token123', 
            'Custom-Header': 'test-value'
        }
    });
    return response;
}

module.exports = { RequestWithHeadersAndParams };