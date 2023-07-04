```javascript
const assert = require('assert');
const deleteCommand = require('../../src/commands/delete');

describe('Delete Command', () => {
  it('should delete the specified mock endpoint', () => {
    // Setup
    const endpoint = '/api/users';
    deleteCommand.create({ endpoint, method: 'GET', response: {} });

    // Exercise
    deleteCommand.delete({ endpoint });

    // Verify
    const result = deleteCommand.list();
    assert(!result.find(e => e.endpoint === endpoint));
  });

  it('should throw an error if the endpoint does not exist', () => {
    // Setup
    const endpoint = '/api/nonexistent';

    // Exercise & Verify
    assert.throws(() => deleteCommand.delete({ endpoint }), /Endpoint not found/);
  });
});
```