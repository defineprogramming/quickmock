```javascript
const responseMiddleware = require('../../src/middleware/response');
const httpMocks = require('node-mocks-http');
const { expect } = require('chai');

describe('Response Middleware', () => {
  it('should set the response data correctly', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const mockData = { message: 'Test' };

    req.mockData = mockData;

    responseMiddleware(req, res, () => {});

    expect(res._getData()).to.deep.equal(mockData);
  });

  it('should call next function', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    let nextCalled = false;

    responseMiddleware(req, res, () => { nextCalled = true; });

    expect(nextCalled).to.be.true;
  });
});
```