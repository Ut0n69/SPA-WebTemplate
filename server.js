var LISTEN_PORT = 8080

var express = require('express')
var app = express()

app.use(express.static('public'))

// root
app.get('/', function (req, res) {
  res.sendFile('./public/index.html')
})

// not found
app.get('/*', function (req, res) {
  res.send('<p style="margin: 30px">Sorry. something wrong...</p>');
})

app.listen(LISTEN_PORT)