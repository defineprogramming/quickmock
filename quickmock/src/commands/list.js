```javascript
const { config } = require('../utils/config');

function list() {
    const endpoints = config.get('endpoints');

    if (!endpoints || endpoints.length === 0) {
        console.log('No mock endpoints found.');
        return;
    }

    console.log('Mock API Endpoints:');
    endpoints.forEach((endpoint, index) => {
        console.log(`${index + 1}. ${endpoint.method} ${endpoint.path}`);
    });
}

module.exports = {
    name: 'list',
    description: 'List all mock API endpoints',
    execute: list
};
```