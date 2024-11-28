// import React, { useState } from 'react';
// import { useWebSocket } from '../webScoket/websocketContext';
// import { useAlerts } from '../contexts/AlertContext';
// import { AlertDialog } from '../alert/AlertDialog';
// import { AlertList } from '../alert/AlertList';
// import { Bell, Plus } from 'lucide-react';

// const MarketPage: React.FC = () => {
//   const { data, status } = useWebSocket();
//   const { checkAlerts } = useAlerts();
//   const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

//   // Check alerts whenever new data comes in
//   React.useEffect(() => {
//     if (data.length > 0) {
//       const latestData = data[data.length - 1];
//       checkAlerts(latestData.symbol, latestData.price);
//     }
//   }, [data, checkAlerts]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Market</h1>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">Real-time Market Data</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {data.slice().reverse().map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.symbol}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.timestamp).toLocaleString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center space-x-2">
//                 <Bell className="h-5 w-5 text-indigo-600" />
//                 <h2 className="text-xl font-semibold">Price Alerts</h2>
//               </div>
//               <button
//                 onClick={() => setIsAlertDialogOpen(true)}
//                 className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
//               >
//                 <Plus className="h-5 w-5" />
//               </button>
//             </div>
//             <AlertList />
//           </div>
//         </div>
//       </div>

//       <AlertDialog 
//         isOpen={isAlertDialogOpen} 
//         onClose={() => setIsAlertDialogOpen(false)} 
//       />
//     </div>
//   );
// };

// export default MarketPage;





// styled
import React, { useState } from 'react';
import { useWebSocket } from '../webScoket/websocketContext';
import { useAlerts } from '../contexts/AlertContext';
import { AlertDialog } from '../alert/AlertDialog';
import { AlertList } from '../alert/AlertList';
import { Bell, Plus } from 'lucide-react';

const MarketPage: React.FC = () => {
  const { data, status } = useWebSocket();
  const { checkAlerts } = useAlerts();
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  // Check alerts whenever new data comes in
  React.useEffect(() => {
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      checkAlerts(latestData.symbol, latestData.price);
    }
  }, [data, checkAlerts]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Market</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Real-time Market Data</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-lg font-bold text-gray-700 uppercase tracking-wider">Symbol</th>
                    <th className="px-6 py-3 text-left text-lg font-bold text-gray-700 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-lg font-bold text-gray-700 uppercase tracking-wider">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.slice().reverse().map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{item.symbol}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-gray-500">{new Date(item.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Bell className="h-6 w-6 text-green-500" />
                <h2 className="text-2xl font-bold">Price Alerts</h2>
              </div>
              <button
                onClick={() => setIsAlertDialogOpen(true)}
                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors duration-200"
              >
                <Plus className="h-6 w-6" />
              </button>
            </div>
            <AlertList />
          </div>
        </div>
      </div>

      <AlertDialog 
        isOpen={isAlertDialogOpen} 
        onClose={() => setIsAlertDialogOpen(false)} 
      />
    </div>
  );
};

export default MarketPage;

