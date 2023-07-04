```javascript
const assert = require('assert');
const config = require('../../src/utils/config');

describe('Config Utility', () => {
  it('should load configuration from JSON file', () => {
    const configData = config.loadConfig('mockConfig.json');
    assert(configData, 'Configuration data should not be null');
  });

  it('should load configuration from YAML file', () => {
    const configData = config.loadConfig('mockConfig.yaml');
    assert(configData, 'Configuration data should not be null');
  });

  it('should return null for non-existent file', () => {
    const configData = config.loadConfig('nonExistentFile.json');
    assert.equal(configData, null, 'Configuration data should be null for non-existent file');
  });

  it('should return null for unsupported file type', () => {
    const configData = config.loadConfig('unsupportedFile.txt');
    assert.equal(configData, null, 'Configuration data should be null for unsupported file type');
  });
});
```