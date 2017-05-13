const bunyan = require('bunyan')
const morgan = require('morgan')

function createLogger (config) {
  const logger = bunyan.createLogger(
    { name: config.name || 'logger',
      stream: config.stream || process.stdout,
      level: config.env === 'development' ? 'debug' : 'info'
    })

  const createMiddleware = function () {
    return morgan('dev',
      { stream:
        { write: (data) => { logger.info((data + '').trim()) }
        }
      })
  }

  createMiddleware.logger = logger

  return createMiddleware
}

module.exports = createLogger
