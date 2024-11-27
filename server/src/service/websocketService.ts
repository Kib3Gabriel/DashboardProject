import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { handleStockUpdates } from '../controllers/webSocketController';
import 'colors';

export const initializeWebSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  console.log('WebSocket service initialized'.blue);

  handleStockUpdates(io);

  return io;
};