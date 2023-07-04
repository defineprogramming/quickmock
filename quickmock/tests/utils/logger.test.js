```javascript
const assert = require('assert');
const sinon = require('sinon');
const logger = require('../../src/utils/logger');

describe('Logger Utility', () => {
  let consoleLogStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleLogStub.restore();
  });

  it('should log the correct message', () => {
    const message = 'Test message';
    logger.log(message);
    assert(consoleLogStub.calledOnceWith(message));
  });

  it('should log the correct error message', () => {
    const errorMessage = 'Test error message';
    logger.error(errorMessage);
    assert(consoleLogStub.calledOnceWith(`Error: ${errorMessage}`));
  });
});
```