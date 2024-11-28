// // line graph. working 
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   CartesianGrid,
//   Legend,
// } from "recharts";
// import { useWebSocket } from "../webScoket/websocketContext";
// import NavBar from "../NavBar/NavBar";

// interface StockUpdate {
//   symbol: string;
//   price: number;
//   timestamp: string;
// }

// const Panel: React.FC<{ children: React.ReactNode; className?: string }> = ({
//   children,
//   className = "",
// }) => (
//   <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// const DashboardPage: React.FC = () => {
//   const { data, status } = useWebSocket();

//   const formatChartData = (data: StockUpdate[]) => {
//     return data.map((item) => ({
//       time: new Date(item.timestamp).toLocaleTimeString(),
//       price: typeof item.price === 'number' ? item.price : parseFloat(item.price as unknown as string),
//     }));
//   };

//   const chartData = formatChartData(data);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div className="flex-1 p-6">
//         <NavBar />

//         <div className="text-right text-sm text-gray-500 mb-4">
//           WebSocket Status:{" "}
//           <span
//             className={`font-semibold ${
//               status === "Connected"
//                 ? "text-green-500"
//                 : status === "Error"
//                 ? "text-red-500"
//                 : "text-gray-500"
//             }`}
//           >
//             {status}
//           </span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <Panel className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Stock Price Over Time</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </Panel>

//           <Panel className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Price Distribution</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="time" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="price" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Panel>
//         </div>

//         <Panel className="mt-6 p-4">
//           <h2 className="text-lg font-semibold mb-4">Recent Stock Updates</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {data.slice().reverse().map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.timestamp).toLocaleTimeString()}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.symbol}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       ${typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price as unknown as string).toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Panel>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;




// // new
// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   BarChart,
//   Bar,
// } from "recharts";
// import { useWebSocket } from "../webScoket/websocketContext";
// import NavBar from "../NavBar/NavBar";

// const StockCard: React.FC<{
//   label: string;
//   value: string | number;
//   currency?: string;
// }> = ({ label, value, currency = "USD" }) => (
//   <div className="bg-white rounded-lg p-6 shadow-sm">
//     <div className="text-base text-gray-500 mb-2">{label}</div>
//     <div className="text-2xl font-semibold flex items-baseline gap-1">
//       <span>{value}</span>
//       <span className="text-base text-gray-500">{currency}</span>
//     </div>
//   </div>
// );

// const DashboardPage: React.FC = () => {
//   const { data, status } = useWebSocket();
  
//   const latestData = data[data.length - 1] || {
//     symbol: "-",
//     price: 0,
//     timestamp: new Date().toISOString(),
//   };

//   return (
//     <div className="flex flex-col h-full bg-gray-100">
//       <div className="flex-shrink-0">
//         <NavBar />
//       </div>
//       <div className="flex-1 overflow-y-auto p-6">
//         {/* Connection Status */}
//         <div className="mb-4 flex items-center gap-2">
//           <span className={`w-3 h-3 rounded-full ${
//             status === "Connected" ? "bg-green-500" : "bg-red-500"
//           }`} />
//           <span className="text-sm font-medium text-gray-700">{status}</span>
//         </div>

//         {/* Stock Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <StockCard 
//             label="Symbol" 
//             value={latestData.symbol} 
//             currency=""
//           />
//           <StockCard 
//             label="Price" 
//             value={latestData.price.toFixed(2)} 
//           />
//           <StockCard 
//             label="Last Updated" 
//             value={new Date(latestData.timestamp).toLocaleTimeString()} 
//             currency=""
//           />
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Price Chart</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis 
//                   dataKey="timestamp" 
//                   tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
//                 />
//                 <YAxis />
//                 <Tooltip 
//                   labelFormatter={(label) => new Date(label).toLocaleTimeString()}
//                   formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="price" 
//                   stroke="#4f46e5" 
//                   dot={false} 
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Price Distribution</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis 
//                   dataKey="timestamp" 
//                   tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
//                 />
//                 <YAxis />
//                 <Tooltip 
//                   labelFormatter={(label) => new Date(label).toLocaleTimeString()}
//                   formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
//                 />
//                 <Bar dataKey="price" fill="#10b981" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


//styled
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { useWebSocket } from "../webScoket/websocketContext";
import NavBar from "../NavBar/NavBar";

const StockCard: React.FC<{
  label: string;
  value: string | number;
  currency?: string;
}> = ({ label, value, currency = "USD" }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="text-base text-gray-500 mb-2">{label}</div>
    <div className="text-3xl font-bold flex items-baseline gap-1">
      <span>{value}</span>
      <span className="text-base text-gray-500">{currency}</span>
    </div>
  </div>
);

const DashboardPage: React.FC = () => {
  const { data, status } = useWebSocket();
  
  const latestData = data[data.length - 1] || {
    symbol: "-",
    price: 0,
    timestamp: new Date().toISOString(),
  };

  // Get the last 10 data points for the bar chart
  const barChartData = data.slice(-10);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-shrink-0">
        <NavBar />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {/* Connection Status */}
        <div className="mb-6 flex justify-end items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${
            status === "Connected" ? "bg-green-500" : "bg-red-500"
          }`} />
          <span className="text-base font-medium text-gray-700">{status}</span>
        </div>

        {/* Stock Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StockCard 
            label="Symbol" 
            value={latestData.symbol} 
            currency=""
          />
          <StockCard 
            label="Price" 
            value={latestData.price.toFixed(2)} 
          />
          <StockCard 
            label="Last Updated" 
            value={new Date(latestData.timestamp).toLocaleTimeString()} 
            currency=""
          />
        </div>

        {/* Charts */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex-grow">
            <h2 className="text-xl font-semibold mb-4">Price Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="timestamp" 
                  tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(label) => new Date(label).toLocaleTimeString()}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#4f46e5" 
                  dot={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Price Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="timestamp" 
                  tickFormatter={(time) => new Date(time).toLocaleTimeString()} 
                  interval="preserveStartEnd"
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(label) => new Date(label).toLocaleTimeString()}
                  formatter={(value: number) => [`$${value.toFixed(2)}`, "Price"]}
                />
                <Bar dataKey="price" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

