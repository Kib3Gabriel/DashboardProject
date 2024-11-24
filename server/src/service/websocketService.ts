import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { handleStockUpdates } from '../controllers/webSocketController';
import 'colors'

export const initializeWebSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*', // Allows connecyion from any origin
      methods: ['GET', 'POST'],
    },
  });

  // Client connection handling
  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`.blue);

    // Example: Emit a welcome message
    socket.emit('message', { content: 'Welcome to the WebSocket server!' });

    // Listen for custom events from the client
    socket.on('sendMessage', (data) => {
      console.log('Message received:', data);
      // Broadcast to other connected clients
      socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`.red);
    });
  });

  handleStockUpdates(io);

  return io;
};
