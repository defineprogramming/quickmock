```javascript
const delay = require('../../src/middleware/delay');
const assert = require('assert');

describe('Delay Middleware', () => {
    it('should delay the response by the specified time', (done) => {
        const req = {};
        const res = {};
        const next = () => {
            const end = Date.now();
            assert(end - start >= 1000);
            done();
        };

        const start = Date.now();
        delay(1000)(req, res, next);
    });

    it('should call next function after delay', (done) => {
        const req = {};
        const res = {};
        const next = done;

        delay(1000)(req, res, next);
    });
});
```