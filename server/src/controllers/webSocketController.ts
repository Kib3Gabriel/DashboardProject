export const handleStockUpdates = (io: any) => {
    // Simulate stock updates
    setInterval(() => {
      const stockUpdate = {
        symbol: 'AAPL',
        price: (Math.random() * 100).toFixed(2),
        timestamp: new Date().toISOString(),
      };
  
      io.emit('stockUpdate', stockUpdate);
      // console.log('Broadcasting stock update:'.yellow, stockUpdate);
      const output = `Broadcasting stock update: ${JSON.stringify(stockUpdate, null, 2)}`;
      console.log(output.yellow);
    }, 5000); // Update every 5 seconds
  };



