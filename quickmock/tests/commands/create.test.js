```javascript
const assert = require('assert');
const createCommand = require('../../src/commands/create');

describe('Create Command', () => {
  it('should create a mock API endpoint', () => {
    const endpoint = '/api/users';
    const method = 'GET';
    const responseFile = 'users.json';

    createCommand.create(endpoint, method, responseFile);

    const mockApi = createCommand.getMockApi(endpoint, method);
    assert(mockApi, 'Mock API was not created');
    assert.equal(mockApi.responseFile, responseFile, 'Response file does not match');
  });

  it('should throw an error for invalid HTTP method', () => {
    const endpoint = '/api/users';
    const method = 'INVALID';
    const responseFile = 'users.json';

    assert.throws(() => {
      createCommand.create(endpoint, method, responseFile);
    }, 'Did not throw error for invalid HTTP method');
  });

  it('should throw an error for missing response file', () => {
    const endpoint = '/api/users';
    const method = 'GET';
    const responseFile = 'missing.json';

    assert.throws(() => {
      createCommand.create(endpoint, method, responseFile);
    }, 'Did not throw error for missing response file');
  });
});
```