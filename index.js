var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var render = require('./render.js')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile('/public/index.html', { root: __dirname })
})

server.listen(5000, function() {
    console.log('running')
})

io.on('connection', function (socket) {
  socket.on('my other event', function (data) {

  });

  socket.on('puppet', function() {
    render.renderPuppet(data);
  })

  socket.on('selenium', function() {
    render.renderSelenium();
  })

  socket.on('ffmpeg', function(){
    render.svgToVideo();
  })

  socket.on('cc', function(data){
    render.capture();
  })
  
});