const fs = require('fs');
const path = require('path');
const { logger } = require('../utils/logger');
const { validator } = require('../utils/validator');

const deleteCommand = (endpoint) => {
  const configPath = path.join(__dirname, '..', 'config.json');

  fs.readFile(configPath, 'utf8', (err, data) => {
    if (err) {
      logger.error('Error reading config file');
      return;
    }

    const config = JSON.parse(data);

    if (!validator.isEndpointExist(config, endpoint)) {
      logger.error(`Endpoint ${endpoint} does not exist`);
      return;
    }

    const updatedConfig = config.filter((api) => api.endpoint !== endpoint);

    fs.writeFile(configPath, JSON.stringify(updatedConfig, null, 2), 'utf8', (err) => {
      if (err) {
        logger.error('Error updating config file');
        return;
      }

      logger.info(`Endpoint ${endpoint} deleted successfully`);
    });
  });
};

module.exports = {
  deleteCommand,
};