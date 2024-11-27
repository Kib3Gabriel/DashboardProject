import { io } from 'socket.io-client';
import 'colors';

const socket = io('http://localhost:5400');

socket.on('connect', () => {
  console.log('Connected to WebSocket server'.green);
});

socket.on('status', (data) => {
  console.log('Received status:'.blue, data.message);
});

socket.on('stockUpdate', (data) => {
  console.log('Received stock update:'.yellow, JSON.stringify(data, null, 2));
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server'.red);
});