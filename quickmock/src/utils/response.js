```javascript
const fs = require('fs');
const path = require('path');

function getResponseData(responseFile) {
    try {
        const data = fs.readFileSync(path.resolve(responseFile), 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading response file: ${responseFile}`);
        process.exit(1);
    }
}

function generateResponse(request, responseFile) {
    const responseData = getResponseData(responseFile);
    const { status = 200, headers = {}, body = {} } = responseData;

    request.status(status).set(headers).json(body);
}

module.exports = {
    generateResponse,
};
```