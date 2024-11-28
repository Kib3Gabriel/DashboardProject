import React, { createContext, useContext, useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

interface PriceAlert {
  id: string;
  symbol: string;
  price: number;
  condition: 'above' | 'below';
  active: boolean;
  triggerHistory: Array<{
    timestamp: string;
    price: number;
  }>;
}

interface AlertContextType {
  alerts: PriceAlert[];
  addAlert: (alert: Omit<PriceAlert, 'id' | 'active' | 'triggerHistory'>) => void;
  removeAlert: (id: string) => void;
  toggleAlert: (id: string) => void;
  checkAlerts: (symbol: string, currentPrice: number) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<PriceAlert[]>([]);

  const addAlert = useCallback((newAlert: Omit<PriceAlert, 'id' | 'active' | 'triggerHistory'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setAlerts(prev => [...prev, { ...newAlert, id, active: true, triggerHistory: [] }]);
    toast.success('Alert created successfully');
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
    toast.success('Alert removed');
  }, []);

  const toggleAlert = useCallback((id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, active: !alert.active } : alert
    ));
  }, []);

  const checkAlerts = useCallback((symbol: string, currentPrice: number) => {
    setAlerts(prev => prev.map(alert => {
      if (!alert.active || alert.symbol !== symbol) return alert;

      const condition = alert.condition === 'above' 
        ? currentPrice >= alert.price 
        : currentPrice <= alert.price;

      if (condition) {
        const newTrigger = {
          timestamp: new Date().toISOString(),
          price: currentPrice
        };
        
        toast.success(
          `${symbol} price is ${alert.condition} ${alert.price}! Current price: ${currentPrice}`,
          { duration: 5000 }
        );

        return {
          ...alert,
          triggerHistory: [...alert.triggerHistory, newTrigger]
        };
      }

      return alert;
    }));
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert, toggleAlert, checkAlerts }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlerts = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlerts must be used within an AlertProvider');
  }
  return context;
};

