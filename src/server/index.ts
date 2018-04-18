import * as path from 'path'
import * as express from 'express'

const app = express()
app.use(express.static(path.resolve(__dirname, '../client')))

const server = app.listen(parseInt(process.env.PORT) || 8080, () => {
  console.log('Express listening on port ', server.address().port)
})