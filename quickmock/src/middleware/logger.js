```javascript
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
module.exports = morgan('combined', { stream: accessLogStream })
```