import { Server } from 'socket.io';
import 'colors';

export const handleStockUpdates = (io: Server) => {
  console.log('WebSocket server initialized'.green);

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`.green);
    socket.emit('status', { message: 'WebSocket connected successfully' });

    const interval = setInterval(() => {
      const stockUpdate = {
        symbol: 'AAPL',
        price: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toISOString(),
      };

      socket.emit('stockUpdate', stockUpdate);
      const output = `Broadcasting stock update: ${JSON.stringify(stockUpdate, null, 2)}`;
      console.log(output.yellow);
    }, 5000);

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`.red);
      clearInterval(interval);
    });
  });
};