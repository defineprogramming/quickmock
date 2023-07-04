```javascript
#!/usr/bin/env node

const program = require('commander');
const { create } = require('./commands/create');
const { list } = require('./commands/list');
const { delete: deleteEndpoint } = require('./commands/delete');

program
  .version('1.0.0')
  .description('QuickMock - An API Mocking Command Line Tool for Developers');

program
  .command('create')
  .alias('c')
  .description('Create a mock API endpoint')
  .option('-e, --endpoint <endpoint>', 'Specify the API endpoint')
  .option('-m, --method <method>', 'Specify the HTTP method')
  .option('-r, --response-file <file>', 'Specify the response data file')
  .action(create);

program
  .command('list')
  .alias('l')
  .description('List all mock API endpoints')
  .action(list);

program
  .command('delete')
  .alias('d')
  .description('Delete a mock API endpoint')
  .option('-e, --endpoint <endpoint>', 'Specify the API endpoint')
  .option('-m, --method <method>', 'Specify the HTTP method')
  .action(deleteEndpoint);

program.parse(process.argv);
```