
const { RequestWithHeadersAndParams } = require('./task2.js');

test("send request with custom headers and params", async () => {
    const response = await RequestWithHeadersAndParams();
    
    expect(response.status).toBe(200);
});