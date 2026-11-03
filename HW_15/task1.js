const axios = require('axios');

async function invalidUrl() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/postsg/1");
    return response;
}


module.exports = { invalidUrl };