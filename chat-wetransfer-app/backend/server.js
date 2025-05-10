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

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  // Join room by code
  socket.on('joinRoom', (code) => {
    socket.join(code);
    console.log(`User ${socket.id} joined room ${code}`);
  });

  // Handle chat message
  // Relay encrypted messages only, no decryption or inspection
  socket.on('chatMessage', ({ code, encryptedMessage }) => {
    io.to(code).emit('chatMessage', { encryptedMessage, sender: socket.id });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
