```javascript
const assert = require('assert');
const sinon = require('sinon');
const loggerMiddleware = require('../../src/middleware/logger');

describe('Logger Middleware', () => {
  let req, res, next, consoleLogStub;

  beforeEach(() => {
    req = {
      method: 'GET',
      url: '/api/users'
    };
    res = {};
    next = sinon.stub();
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should log the request method and url', () => {
    loggerMiddleware(req, res, next);
    assert(consoleLogStub.calledWith(`Request: ${req.method} ${req.url}`));
    assert(next.calledOnce);
  });
});
```