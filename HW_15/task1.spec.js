const { invalidUrl } = require('./task1.js');

test('sending request to invalid URL', async () => {
    await expect(invalidUrl()).rejects.toThrow();
});