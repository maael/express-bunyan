# express-bunyan

## install

```
npm i --save @maael/express-bunyan
```

## usage

```
const express = require('express')
const expressBun = require('@maael/express-bunyan')
const app = express()

const config = {
  name: 'logger',
  stream: process.stdout,
  env: 'development'
}

const createMiddleware = expressBun(config)

// createMiddleware also exposes the bunyan logger used in the middleware
// access it via .logger

app.logger = createMiddleware.logger

app.use(createMiddleware())

app.listen(4242, () => {
  app.logger.info('Server started')
})
```

### config options

| option      | description                       | default           |
| ------------|-----------------------------------|-------------------|
| name        | name of the logger                | `'logger'`        |
| stream      | stream to pipe the logs to        | `process.stdout`  |
| env         | environment the app is running in | `'development'`   |
