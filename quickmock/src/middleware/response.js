```javascript
const fs = require('fs');
const path = require('path');
const { config } = require('../utils/config');

function response(req, res, next) {
    const { method, url } = req;
    const endpoint = config.getEndpoint(method, url);

    if (!endpoint) {
        res.statusCode = 404;
        res.end('Not Found');
        return;
    }

    const responseFilePath = path.join(__dirname, '..', 'responses', endpoint.responseFile);

    fs.readFile(responseFilePath, 'utf8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        const { statusCode, headers, body } = JSON.parse(data);

        res.statusCode = statusCode;
        Object.entries(headers).forEach(([key, value]) => {
            res.setHeader(key, value);
        });
        res.end(body);
    });
}

module.exports = response;
```