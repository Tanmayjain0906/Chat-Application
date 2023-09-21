const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 4444;

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
      io.emit('emit message', data);
    })
  });

app.use(express.static('public'));

server.listen(PORT);

//http://Localhost:4444/