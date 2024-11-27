import React, { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';

interface StockUpdate {
  symbol: string;
  price: number;
  timestamp: string;
}

interface WebSocketContextType {
  data: StockUpdate[];
  status: "Connected" | "Disconnected" | "Error";
}

const WebSocketContext = createContext<WebSocketContextType>({
  data: [],
  status: "Disconnected",
});

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<StockUpdate[]>([]);
  const [status, setStatus] = useState<"Connected" | "Disconnected" | "Error">("Disconnected");

  useEffect(() => {
    const socket = io('http://localhost:5400');

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setStatus("Connected");
    });

    socket.on('stockUpdate', (stockUpdate: StockUpdate) => {
      setData((prevData) => [...prevData.slice(-19), {
        ...stockUpdate,
        price: typeof stockUpdate.price === 'number' ? stockUpdate.price : parseFloat(stockUpdate.price as unknown as string)
      }]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
      setStatus("Disconnected");
    });

    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
      setStatus("Error");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ data, status }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);

