import app from './app';
import 'colors';
import { PrismaClient } from '@prisma/client';
import { initializeWebSocket } from './service/websocketService';
import { createServer } from 'http';

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully'.blue);

    const httpServer = createServer(app);
    //initialize webSocket
    initializeWebSocket(httpServer);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`.blue);
    });
  } catch (error) {
    console.error('Error connecting to the database:'.red, error);
    await prisma.$disconnect();
  }
};

main();

