const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join room', ({ username, room }) => {
    socket.join(room);
    socket.username = username;
    socket.room = room;

    socket.to(room).emit('chat message', {
      user: 'System',
      text: `${username} has joined the room.`,
    });
  });

  socket.on('chat message', (msg) => {
    io.to(socket.room).emit('chat message', {
      user: socket.username,
      text: msg,
    });
  });

  socket.on('disconnect', () => {
    if (socket.room && socket.username) {
      socket.to(socket.room).emit('chat message', {
        user: 'System',
        text: `${socket.username} has left the chat.`,
      });
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
