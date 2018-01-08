const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
const socketIO = require('socket.io');
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User Connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected!');
  });
  
});

io.on('disconnect', (socket) => {
  console.log('Disconnected from server!');
});

server.listen(8080, () => {
  console.log('Server is up on port 8080');
});


