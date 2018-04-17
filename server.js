const path = require('path')
const express = require('express')

var app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.set('port', process.env.PORT || 8080)

var server = app.listen(app.get('port'), () => {
  console.log('listening on port ', server.address().port)
})