




const express = require('express')
const server = express()


/* other routes defined before catch-all */
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

/* final catch-all route to index.html defined last */
server.get('/vendor/bootstrap/css/bootstrap.min.css', (req, res) => {
  res.sendFile(__dirname + '/vendor/bootstrap/css/bootstrap.min.css');
})

server.get('/vendor/fontawesome-free/css/all.min.css', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/css/all.min.css');
})

server.get('/vendor/simple-line-icons/css/simple-line-icons.css', (req, res) => {
  res.sendFile(__dirname + '/vendor/simple-line-icons/css/simple-line-icons.css');
})

server.get('/css/landing-page.min.css', (req, res) => {
  res.sendFile(__dirname + '/css/landing-page.min.css');
})

server.get('/vendor/jquery/jquery.min.js', (req, res) => {
  res.sendFile(__dirname + '/vendor/jquery/jquery.min.js');
})

server.get('/vendor/bootstrap/js/bootstrap.bundle.min.js', (req, res) => {
  res.sendFile(__dirname + '/vendor/bootstrap/js/bootstrap.bundle.min.js');
})

server.get('/img/RicardoFoto.jpg', (req, res) => {
  res.sendFile(__dirname + '/img/RicardoFoto.jpg');
})



server.get('/vendor/fontawesome-free/webfonts/fa-brands-400.ttf', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-brands-400.ttf');
})

server.get('/vendor/fontawesome-free/webfonts/fa-brands-400.woff', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-brands-400.woff');
})

server.get('/vendor/fontawesome-free/webfonts/fa-brands-400.woff2', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-brands-400.woff2');
})

server.get('/vendor/fontawesome-free/webfonts/fa-regular-400.ttf', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-regular-400.ttf');
})

server.get('/vendor/fontawesome-free/webfonts/fa-regular-400.woff2', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-regular-400.woff2');
})

server.get('/vendor/fontawesome-free/webfonts/fa-regular-400.woff', (req, res) => {
  res.sendFile(__dirname + '/vendor/fontawesome-free/webfonts/fa-regular-400.woff');
})















const port = 8000;
server.listen(port, function() {
  console.log('server listening on port ' + port)
})