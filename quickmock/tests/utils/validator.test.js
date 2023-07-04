```javascript
const assert = require('assert');
const validator = require('../../src/utils/validator');

describe('Validator Utility', () => {
  describe('#validateEndpoint()', () => {
    it('should return true for valid endpoints', () => {
      assert.strictEqual(validator.validateEndpoint('/api/users'), true);
    });

    it('should return false for invalid endpoints', () => {
      assert.strictEqual(validator.validateEndpoint('api/users'), false);
    });
  });

  describe('#validateMethod()', () => {
    it('should return true for valid HTTP methods', () => {
      assert.strictEqual(validator.validateMethod('GET'), true);
      assert.strictEqual(validator.validateMethod('POST'), true);
    });

    it('should return false for invalid HTTP methods', () => {
      assert.strictEqual(validator.validateMethod('INVALID'), false);
    });
  });

  describe('#validateResponseFile()', () => {
    it('should return true for valid response file paths', () => {
      assert.strictEqual(validator.validateResponseFile('responses/users.json'), true);
    });

    it('should return false for invalid response file paths', () => {
      assert.strictEqual(validator.validateResponseFile('responses/users'), false);
    });
  });
});
```