const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint to generate a unique code (UUID)
app.get('/generate-code', (req, res) => {
  const code = uuidv4();
  res.json({ code });
});

const rooms = {};

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  socket.on('joinRoom', (code) => {
    socket.join(code);
    if (!rooms[code]) {
      rooms[code] = [];
    }
    rooms[code].push(socket.id);
    console.log(`User ${socket.id} joined room ${code}`);
    // Notify existing users in room about new user
    socket.to(code).emit('newPeer', { peerId: socket.id });
  });

  // Signaling messages for WebRTC
  socket.on('signal', ({ code, to, data }) => {
    io.to(to).emit('signal', { from: socket.id, data });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
    // Remove user from rooms
    for (const code in rooms) {
      rooms[code] = rooms[code].filter(id => id !== socket.id);
      if (rooms[code].length === 0) {
        delete rooms[code];
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
