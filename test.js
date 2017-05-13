const express = require('express')
const expressBun = require('.')
const app = express()

const config = {
  name: 'logger',
  stream: process.stdout,
  env: 'development'
}

const createMiddleware = expressBun(config)

// createMiddleware also exposes the .logger used in the middleware

app.logger = createMiddleware.logger

app.use(createMiddleware())

app.listen(4242, () => {
  app.logger.info('Server started')
})