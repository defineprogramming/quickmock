```javascript
const assert = require('assert');
const response = require('../../src/utils/response');

describe('Response Utility', () => {
  describe('#generateResponse()', () => {
    it('should return the correct response data', () => {
      const mockData = {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: { message: 'Success' }
      };

      const result = response.generateResponse(mockData);
      assert.strictEqual(result.status, mockData.status);
      assert.deepStrictEqual(result.headers, mockData.headers);
      assert.deepStrictEqual(result.body, mockData.body);
    });
  });

  describe('#getDynamicResponse()', () => {
    it('should return dynamic response based on request parameters', () => {
      const mockRequest = {
        params: { id: '123' },
        body: { name: 'Test' }
      };

      const mockFunction = (req) => ({ message: `Hello, ${req.body.name}!` });

      const result = response.getDynamicResponse(mockRequest, mockFunction);
      assert.strictEqual(result.message, 'Hello, Test!');
    });
  });
});
```