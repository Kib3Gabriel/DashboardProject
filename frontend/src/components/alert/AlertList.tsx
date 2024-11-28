// import React from 'react';
// import { useAlerts } from '../contexts/AlertContext';
// import { Switch } from '@headlessui/react';
// import { Trash2, Clock } from 'lucide-react';

// export const AlertList: React.FC = () => {
//   const { alerts, removeAlert, toggleAlert } = useAlerts();

//   if (alerts.length === 0) {
//     return (
//       <div className="text-center text-gray-500 py-4">
//         No alerts set
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className="bg-gray-50 rounded-lg overflow-hidden"
//         >
//           <div className="p-3 flex items-center justify-between">
//             <div>
//               <div className="font-medium">{alert.symbol}</div>
//               <div className="text-sm text-gray-500">
//                 {alert.condition === 'above' ? '≥' : '≤'} ${alert.price.toFixed(2)}
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Switch
//                 checked={alert.active}
//                 onChange={() => toggleAlert(alert.id)}
//                 className={`${
//                   alert.active ? 'bg-indigo-600' : 'bg-gray-200'
//                 } relative inline-flex h-6 w-11 items-center rounded-full`}
//               >
//                 <span className="sr-only">Toggle alert</span>
//                 <span
//                   className={`${
//                     alert.active ? 'translate-x-6' : 'translate-x-1'
//                   } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//                 />
//               </Switch>
//               <button
//                 onClick={() => removeAlert(alert.id)}
//                 className="p-1 text-gray-400 hover:text-red-500"
//               >
//                 <Trash2 className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
          
//           {alert.triggerHistory.length > 0 && (
//             <div className="border-t border-gray-100 bg-white">
//               <div className="p-3">
//                 <h4 className="text-sm font-medium text-gray-500 flex items-center gap-1 mb-2">
//                   <Clock className="h-4 w-4" />
//                   Trigger History
//                 </h4>
//                 <div className="space-y-1">
//                   {alert.triggerHistory.slice(-3).map((trigger, index) => (
//                     <div key={index} className="text-sm text-gray-600">
//                       ${trigger.price.toFixed(2)} at {new Date(trigger.timestamp).toLocaleTimeString()}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };





// styled
import React from 'react';
import { useAlerts } from '../contexts/AlertContext';
import { Switch } from '@headlessui/react';
import { Trash2, Clock } from 'lucide-react';

export const AlertList: React.FC = () => {
  const { alerts, removeAlert, toggleAlert } = useAlerts();

  if (alerts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No alerts set
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
        >
          <div className="p-4 flex items-center justify-between">
            <div>
              <div className="font-bold text-lg">{alert.symbol}</div>
              <div className="text-base text-gray-600">
                {alert.condition === 'above' ? '≥' : '≤'} ${alert.price.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Switch
                checked={alert.active}
                onChange={() => toggleAlert(alert.id)}
                className={`${
                  alert.active ? 'bg-green-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              >
                <span className="sr-only">Toggle alert</span>
                <span
                  className={`${
                    alert.active ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <button
                onClick={() => removeAlert(alert.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {alert.triggerHistory.length > 0 && (
            <div className="border-t border-gray-200 bg-white">
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5" />
                  Triggered History
                </h4>
                <div className="space-y-2">
                  {alert.triggerHistory.slice(-3).map((trigger, index) => (
                    <div key={index} className="text-base text-green-600 flex justify-between">
                      <span>${trigger.price.toFixed(2)}</span>
                      <span>{new Date(trigger.timestamp).toLocaleTimeString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

