


import  { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { BsArrowLeft, BsSearch, BsLightningFill } from "react-icons/bs";
import { RiDashboardHorizontalFill, RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import { RefreshCw } from 'lucide-react';

const mockPerformanceData = [
  { date: 'Mon', value: 17500 },
  { date: 'Tue', value: 17800 },
  { date: 'Wed', value: 18200 },
  { date: 'Thu', value: 17900 },
  { date: 'Fri', value: 18500 },
];

const PortfolioDashboard = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard" },
    { title: "Market", icon: <GiNetworkBars /> },
    { title: "Exchange", icon: <MdCurrencyExchange /> },
    { title: "Setting", icon: <IoSettingsOutline /> },
    { title: "Logout", spacing: true, icon: <RiLogoutCircleRLine /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-indigo h-screen p-5 pt-8 flex flex-col items-center shadow-lg ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center w-full">
          <BsLightningFill
            className={`bg-amber-300 text-4xl rounded-full cursor-pointer mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white font-semibold text-2xl transition-all duration-300 ${
              !open && "hidden"
            }`}
          >
            Market Pulse
          </h1>
        </div>

        <div
          className={`flex items-center bg-gray-700 rounded-md mt-6 w-full p-2 ${
            open ? "px-4" : "px-2.5"
          }`}
        >
          <BsSearch className="text-white text-lg" />
          <input
            type="search"
            placeholder="Search"
            className={`ml-2 bg-transparent text-white placeholder-gray-300 focus:outline-none w-full ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-5 w-full">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-3 mt-2 rounded-lg cursor-pointer hover:bg-slate-400 transition-all ${
                menu.spacing ? "mt-20" : ""
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-lg">
                {menu.icon ? menu.icon : <RiDashboardHorizontalFill />}
              </div>
              <span
                className={`text-base font-medium text-white transition-all duration-300 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Portfolio Value</h2>
              <button className="p-2 hover:bg-gray-50 rounded-full">
                <RefreshCw size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-3xl font-bold">$18,026.00</span>
              <span className="text-green-500 text-sm">+2.4%</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Total Profit</div>
                <div className="text-lg font-semibold">$8,456.89</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 mb-1">Best Performer</div>
                <div className="text-lg font-semibold text-green-500">+$2,987.00</div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockPerformanceData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Holdings Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { symbol: 'AAPL', name: 'Apple Inc', value: 1232.00, change: -0.12 },
              { symbol: 'PYPL', name: 'PayPal Inc', value: 965.00, change: 1.24 },
              { symbol: 'AMZN', name: 'Amazon.com Inc', value: 2567.99, change: 0.01 }
            ].map((stock) => (
              <div key={stock.symbol} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full" />
                  <div>
                    <div className="font-medium">{stock.symbol}</div>
                    <div className="text-sm text-gray-500">{stock.name}</div>
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-semibold">${stock.value}</span>
                  <span className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                    {stock.change >= 0 ? '+' : ''}{stock.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;