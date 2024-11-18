// import { ReactNode } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { MoreVertical, Copy } from 'lucide-react';
// import Sidebar from '../sideBar/SideBar';
// import NavBar from '../NavBar/NavBar'; // Import the NavBar component
// import {
//   portfolioValue,
//   allTimeProfit,
//   bestPerformer,
//   stocks,
//   chartData,
//   transactions,
//   futures,
// } from '../mock/mockData';

// const Panel = ({ children, className = "" }:{ children: ReactNode; className?: string }) => (
//   <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* NavBar */}
//         <NavBar /> {/* Use the NavBar component here */}

//         {/* Portfolio Section */}
//         <div className="grid grid-cols-2 gap-8 mb-8">
//           <Panel>
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-600">Portfolio value</div>
//                 <button className="hover:bg-gray-100 p-1 rounded">
//                   <MoreVertical className="w-5 h-5 text-gray-400" />
//                 </button>
//               </div>
//               <div className="flex items-center mb-4">
//                 <div className="text-3xl font-bold">{portfolioValue}</div>
//                 <button className="ml-2 hover:bg-gray-100 p-1 rounded">
//                   <Copy className="w-4 h-4 text-gray-400" />
//                 </button>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-sm text-gray-500">All time profit</div>
//                   <div className="text-lg font-semibold text-green-500">{allTimeProfit}</div>
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-500">Best performer</div>
//                   <div className="text-lg font-semibold text-green-500">{bestPerformer}</div>
//                 </div>
//               </div>
//             </div>
//           </Panel>

//           <Panel>
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-600">Your Portfolio</div>
//                 <button className="hover:bg-gray-100 p-1 rounded">
//                   <MoreVertical className="w-5 h-5 text-gray-400" />
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 {stocks.map((stock) => (
//                   <div key={stock.symbol} className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <span className="text-2xl mr-2">{stock.logo}</span>
//                       <div>
//                         <div className="text-sm font-semibold">{stock.name}</div>
//                         <div className="text-xs text-gray-500">{stock.symbol}</div>
//                       </div>
//                     </div>
//                     <div className="text-sm font-semibold">{stock.price}</div>
//                     <div className={`text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                       {stock.change > 0 ? '+' : ''}
//                       {stock.change}%
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Panel>
//         </div>

//         {/* Line Chart */}
//         <Panel className="p-6 mb-8">
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={chartData}>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </Panel>

//         {/* Transactions and Futures */}
//         <div className="grid grid-cols-2 gap-8">
//           <Panel className="p-6">
//             <div className="mb-4 font-semibold">Recent Transactions</div>
//             {transactions.map((transaction) => (
//               <div key={transaction.type} className="mb-4">
//                 <div className="text-sm">{transaction.type}</div>
//                 <div className="text-xs text-gray-500">{transaction.date}</div>
//                 <div className="text-sm font-semibold text-green-500">{transaction.price}</div>
//               </div>
//             ))}
//           </Panel>

//           <Panel className="p-6">
//             <div className="mb-4 font-semibold">Futures</div>
//             {futures.map((future) => (
//               <div key={future.name} className="flex justify-between items-center mb-4">
//                 <div>
//                   <div className="text-sm font-semibold">{future.name}</div>
//                   <div className="text-xs text-gray-500">{future.index}</div>
//                 </div>
//                 <div className="text-sm font-semibold">{future.price}</div>
//                 <div className={`text-sm ${future.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                   {future.change >= 0 ? '+' : ''}
//                   {future.change}
//                 </div>
//               </div>
//             ))}
//           </Panel>
//         </div>
//       </div>
//     </div>
//   );
// };










// export default Dashboard;

import { ReactNode } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { MoreVertical, Copy } from "lucide-react";
// import Sidebar from '../sideBar/SideBar';
import NavBar from "../NavBar/NavBar";
import {
  portfolioValue,
  allTimeProfit,
  bestPerformer,
  stocks,
  chartData,
  barChartData,
  transactions,
  futures,
} from "../mock/mockData";

const Panel = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-1">
        {/* NavBar */}
        <NavBar /> 
        {/* Portfolio Section */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Value Panel */}
          <Panel className="col-span-1">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-600">Portfolio value</div>
                <button className="hover:bg-gray-100 p-1 rounded">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold">{portfolioValue}</div>
                <button className="ml-2 hover:bg-gray-100 p-1 rounded">
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">All time profit</div>
                  <div className="text-lg font-semibold text-green-500">
                    {allTimeProfit}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Best performer</div>
                  <div className="text-lg font-semibold text-green-500">
                    {bestPerformer}
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          {/* your portfolio */}
          <Panel className="col-span-2">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-600">Your Portfolio</div>
                <button className="hover:bg-gray-100 p-1 rounded">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-4">
                {stocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{stock.logo}</span>
                      <div>
                        <div className="text-sm font-semibold">
                          {stock.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stock.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">{stock.price}</div>
                    <div
                      className={`text-sm ${
                        stock.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {stock.change > 0 ? "+" : ""}
                      {stock.change}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>
        <Panel className="p-6 mb-8 grid grid-cols-3 gap-8">
          {/* Line Chart Container */}
          <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4 text-lg font-semibold text-gray-800">
              Portfolio Value Over Time
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart Container */}
          <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4 text-lg font-semibold text-gray-800">
              Daily Performance
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barChartData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value"  fill="#195e83"  barSize={20} radius={[7,7,0,0]}  />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        {/* Transactions and Futures */}
        <div className="grid grid-cols-2 gap-8">
          <Panel className="p-6">
            <div className="mb-4 font-semibold">Recent Transactions</div>
            {transactions.map((transaction) => (
              <div key={transaction.type} className="mb-4">
                <div className="text-sm">{transaction.type}</div>
                <div className="text-xs text-gray-500">{transaction.date}</div>
                <div className="text-sm font-semibold text-green-500">
                  {transaction.price}
                </div>
              </div>
            ))}
          </Panel>

          <Panel className="p-6">
            <div className="mb-4 font-semibold">Futures</div>
            {futures.map((future) => (
              <div
                key={future.name}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <div className="text-sm font-semibold">{future.name}</div>
                  <div className="text-xs text-gray-500">{future.index}</div>
                </div>
                <div className="text-sm font-semibold">{future.price}</div>
                <div
                  className={`text-sm ${
                    future.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {future.change >= 0 ? "+" : ""}
                  {future.change}
                </div>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;













































// import React, { useState, useEffect, ReactNode } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';
// import { MoreVertical, Copy } from 'lucide-react';

// // Types
// interface PanelProps {
//   children: ReactNode;
//   className?: string;
// }

// interface StockData {
//   symbol: string;
//   price: number;
//   change: number;
//   lastUpdated: string;
// }

// interface HistoricalDataPoint {
//   time: string;
//   price: number;
// }

// // Mock data for development/fallback
// const MOCK_STOCK_DATA: StockData = {
//   symbol: 'AAPL',
//   price: 150.25,
//   change: 2.5,
//   lastUpdated: new Date().toLocaleString()
// };

// const generateMockHistoricalData = (basePrice: number): HistoricalDataPoint[] => {
//   return Array.from({ length: 10 }, (_, i) => ({
//     time: `${i}:00`,
//     price: basePrice * (1 + (Math.random() * 0.1 - 0.05))
//   }));
// };

// const Panel: React.FC<PanelProps> = ({ children, className = "" }) => (
//   <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
//     {children}
//   </div>
// );

// const Dashboard: React.FC = () => {
//   const [stockData, setStockData] = useState<StockData | null>(null);
//   const [historicalData, setHistoricalData] = useState<HistoricalDataPoint[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const formatCurrency = (value: number): string => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(value);
//   };

//   const calculateChange = (current: number, previous: number): number => {
//     if (!previous) return 0;
//     return ((current - previous) / previous) * 100;
//   };

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         setIsLoading(true);
        
//         // Try to fetch from the API through the proxy
//         const response = await fetch(
//           '/api/last/stock/AAPL?apikey=API_KEYebd3ZzB03XZfKNDtunv1tH4elaA4WN6iMyaucKxlJ5Gep5',
//           {
//             headers: {
//               'Accept': 'application/json',
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error('API request failed');
//         }

//         const data = await response.json();
        
//         const newStockData: StockData = {
//           symbol: data.symbol,
//           price: data.price,
//           change: calculateChange(data.price, data.previous_close),
//           lastUpdated: new Date(data.timestamp).toLocaleString()
//         };

//         setStockData(newStockData);
//         setHistoricalData(generateMockHistoricalData(data.price));

//       } catch (err) {
//         console.error("Error fetching stock data:", err);
        
//         // Fallback to mock data if API fails
//         setStockData(MOCK_STOCK_DATA);
//         setHistoricalData(generateMockHistoricalData(MOCK_STOCK_DATA.price));
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchStockData();
//     const interval = setInterval(fetchStockData, 300000); // 5 minutes
//     return () => clearInterval(interval);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <div className="text-lg">Loading dashboard data...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <div className="flex-1 p-8">
//         <div className="grid grid-cols-3 gap-8 mb-8">
//           <Panel className="col-span-1">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-600">Portfolio Value</div>
//                 <button className="hover:bg-gray-100 p-1 rounded">
//                   <MoreVertical className="w-5 h-5 text-gray-400" />
//                 </button>
//               </div>
//               <div className="flex items-center mb-4">
//                 <div className="text-3xl font-bold">
//                   {formatCurrency(stockData?.price || 0)}
//                 </div>
//                 <button className="ml-2 hover:bg-gray-100 p-1 rounded">
//                   <Copy className="w-4 h-4 text-gray-400" />
//                 </button>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-sm text-gray-500">Daily Change</div>
//                   <div className={`text-lg font-semibold ${
//                     (stockData?.change || 0) >= 0 ? 'text-green-500' : 'text-red-500'
//                   }`}>
//                     {(stockData?.change || 0) > 0 ? '+' : ''}
//                     {stockData?.change.toFixed(2)}%
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-500">Last Updated</div>
//                   <div className="text-sm font-medium">
//                     {stockData?.lastUpdated}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Panel>

//           <Panel className="col-span-2">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-600">Price History</div>
//                 <button className="hover:bg-gray-100 p-1 rounded">
//                   <MoreVertical className="w-5 h-5 text-gray-400" />
//                 </button>
//               </div>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={historicalData}>
//                     <XAxis 
//                       dataKey="time"
//                       stroke="#94a3b8"
//                       fontSize={12}
//                     />
//                     <YAxis
//                       stroke="#94a3b8"
//                       fontSize={12}
//                       domain={['auto', 'auto']}
//                       tickFormatter={(value: number) => `$${value.toFixed(2)}`}
//                     />
//                     <Tooltip
//                       formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
//                     />
//                     <Line
//                       type="monotone"
//                       dataKey="price"
//                       stroke="#2563eb"
//                       strokeWidth={2}
//                       dot={false}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </Panel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;