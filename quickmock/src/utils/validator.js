```javascript
const httpMethods = ["GET", "POST", "PUT", "DELETE"];

function validateMethod(method) {
  if (!httpMethods.includes(method)) {
    throw new Error(`Invalid HTTP method: ${method}. Supported methods are ${httpMethods.join(", ")}`);
  }
}

function validateEndpoint(endpoint) {
  if (!endpoint.startsWith("/")) {
    throw new Error(`Invalid endpoint: ${endpoint}. Endpoints should start with a "/".`);
  }
}

function validateResponseFile(responseFile) {
  if (!responseFile.endsWith(".json") && !responseFile.endsWith(".yaml")) {
    throw new Error(`Invalid response file: ${responseFile}. Supported formats are JSON and YAML.`);
  }
}

module.exports = {
  validateMethod,
  validateEndpoint,
  validateResponseFile
};
```