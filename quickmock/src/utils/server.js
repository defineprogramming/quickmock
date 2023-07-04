```javascript
const http = require('http');
const url = require('url');
const delayMiddleware = require('../middleware/delay');
const loggerMiddleware = require('../middleware/logger');
const responseMiddleware = require('../middleware/response');
const config = require('./config');

let server;

function startServer() {
  server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toLowerCase();

    const chosenHandler = config.routes[path] && config.routes[path][method]
      ? responseMiddleware(config.routes[path][method])
      : responseMiddleware();

    const middleware = [delayMiddleware, loggerMiddleware, chosenHandler];

    let i = 0;

    function next() {
      if (i < middleware.length) {
        middleware[i++](req, res, next);
      }
    }

    next();
  });

  server.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
}

function stopServer() {
  if (server) {
    server.close();
    console.log(`Server stopped listening on port ${config.port}`);
  }
}

module.exports = {
  startServer,
  stopServer,
};
```