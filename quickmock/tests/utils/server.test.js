```javascript
const assert = require('assert');
const server = require('../../src/utils/server');

describe('Server Utility', () => {
  describe('#start()', () => {
    it('should start the server without error', async () => {
      let error;
      try {
        await server.start();
      } catch (e) {
        error = e;
      }
      assert.equal(error, undefined);
    });
  });

  describe('#stop()', () => {
    it('should stop the server without error', async () => {
      let error;
      try {
        await server.stop();
      } catch (e) {
        error = e;
      }
      assert.equal(error, undefined);
    });
  });

  describe('#handleRequest()', () => {
    it('should handle requests and send response', async () => {
      const mockReq = { method: 'GET', url: '/api/test' };
      const mockRes = {
        writeHead: function() {},
        end: function() {}
      };
      let error;
      try {
        await server.handleRequest(mockReq, mockRes);
      } catch (e) {
        error = e;
      }
      assert.equal(error, undefined);
    });
  });
});
```