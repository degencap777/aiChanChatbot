const path = require('path')
const express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, 'dist')))

var server = app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  console.log('Express listening on port ', server.address().port)
})