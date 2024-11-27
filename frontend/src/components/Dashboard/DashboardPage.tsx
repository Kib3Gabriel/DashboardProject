import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import { useWebSocket } from "../webScoket/websocketContext";
import NavBar from "../NavBar/NavBar";

interface StockUpdate {
  symbol: string;
  price: number;
  timestamp: string;
}

const Panel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const DashboardPage: React.FC = () => {
  const { data, status } = useWebSocket();

  const formatChartData = (data: StockUpdate[]) => {
    return data.map((item) => ({
      time: new Date(item.timestamp).toLocaleTimeString(),
      price: typeof item.price === 'number' ? item.price : parseFloat(item.price as unknown as string),
    }));
  };

  const chartData = formatChartData(data);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <NavBar />

        <div className="text-right text-sm text-gray-500 mb-4">
          WebSocket Status:{" "}
          <span
            className={`font-semibold ${
              status === "Connected"
                ? "text-green-500"
                : status === "Error"
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Panel className="p-4">
            <h2 className="text-lg font-semibold mb-4">Stock Price Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Panel>

          <Panel className="p-4">
            <h2 className="text-lg font-semibold mb-4">Price Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </div>

        <Panel className="mt-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Stock Updates</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.slice().reverse().map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.timestamp).toLocaleTimeString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.symbol}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price as unknown as string).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default DashboardPage;






// // candlestick
// import React, { useMemo } from "react";
// import {
//   ComposedChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Legend,
//   Line,
// } from "recharts";
// import { useWebSocket } from "../webScoket/websocketContext";
// import NavBar from "../NavBar/NavBar";

// interface StockUpdate {
//   symbol: string;
//   price: number;
//   timestamp: string;
// }

// interface CandlestickData {
//   time: string;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
// }

// const Panel: React.FC<{ children: React.ReactNode; className?: string }> = ({
//   children,
//   className = "",
// }) => (
//   <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// const CandlestickChart: React.FC<{ data: CandlestickData[] }> = ({ data }) => (
//   <ResponsiveContainer width="100%" height={300}>
//     <ComposedChart data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="time" />
//       <YAxis domain={['auto', 'auto']} />
//       <Tooltip
//         content={({ active, payload }) => {
//           if (active && payload && payload.length) {
//             const data = payload[0].payload;
//             return (
//               <div className="bg-white p-2 border border-gray-300 rounded shadow">
//                 <p>Time: {data.time}</p>
//                 <p>Open: {data.open.toFixed(2)}</p>
//                 <p>High: {data.high.toFixed(2)}</p>
//                 <p>Low: {data.low.toFixed(2)}</p>
//                 <p>Close: {data.close.toFixed(2)}</p>
//               </div>
//             );
//           }
//           return null;
//         }}
//       />
//       <Legend />
//       <Bar
//         dataKey="high"
//         fill="transparent"
//         stroke="#8884d8"
//         barSize={5}
//       />
//       <Bar
//         dataKey="low"
//         fill="transparent"
//         stroke="#82ca9d"
//         barSize={5}
//       />
//       <Line
//         type="monotone"
//         dataKey="close"
//         stroke="#ff7300"
//         dot={false}
//       />
//     </ComposedChart>
//   </ResponsiveContainer>
// );

// const DashboardPage: React.FC = () => {
//   const { data, status } = useWebSocket();

//   const candlestickData = useMemo(() => {
//     const groupedData: { [key: string]: number[] } = {};
//     data.forEach((item) => {
//       const time = new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//       if (!groupedData[time]) {
//         groupedData[time] = [item.price];
//       } else {
//         groupedData[time].push(item.price);
//       }
//     });

//     return Object.entries(groupedData).map(([time, prices]) => ({
//       time,
//       open: prices[0],
//       high: Math.max(...prices),
//       low: Math.min(...prices),
//       close: prices[prices.length - 1],
//     }));
//   }, [data]);

//   return (
//     <div className="flex flex-col h-full bg-gray-100">
//       <div className="flex-shrink-0">
//         <NavBar />
//       </div>
//       <div className="flex-1 overflow-y-auto p-6">
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
//             <h2 className="text-lg font-semibold mb-4">Stock Price Candlestick Chart</h2>
//             <CandlestickChart data={candlestickData} />
//           </Panel>

//           <Panel className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Recent Stock Updates</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {data.slice().reverse().map((item, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(item.timestamp).toLocaleTimeString()}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.symbol}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         ${typeof item.price === 'number' ? item.price.toFixed(2) : parseFloat(item.price as unknown as string).toFixed(2)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </Panel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

