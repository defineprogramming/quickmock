```javascript
const fs = require('fs');
const yaml = require('js-yaml');

const CONFIG_FILE_JSON = './config.json';
const CONFIG_FILE_YAML = './config.yaml';

function loadConfig() {
  let config = {};

  if (fs.existsSync(CONFIG_FILE_JSON)) {
    config = JSON.parse(fs.readFileSync(CONFIG_FILE_JSON, 'utf8'));
  } else if (fs.existsSync(CONFIG_FILE_YAML)) {
    config = yaml.safeLoad(fs.readFileSync(CONFIG_FILE_YAML, 'utf8'));
  }

  return config;
}

function saveConfig(config) {
  if (fs.existsSync(CONFIG_FILE_JSON)) {
    fs.writeFileSync(CONFIG_FILE_JSON, JSON.stringify(config, null, 2), 'utf8');
  } else if (fs.existsSync(CONFIG_FILE_YAML)) {
    fs.writeFileSync(CONFIG_FILE_YAML, yaml.safeDump(config), 'utf8');
  }
}

module.exports = {
  loadConfig,
  saveConfig
};
```