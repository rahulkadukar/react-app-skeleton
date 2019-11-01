const bunyan = require('bunyan')

const bunyanOpts = {
  name: 'network',
  streams: [
    {
      level: 'info',
      path: './logs/logs.json'  // log ERROR and above to a file
    }
  ]
}

const logger = bunyan.createLogger(bunyanOpts)

module.exports = logger