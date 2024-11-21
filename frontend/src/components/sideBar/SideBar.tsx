// with Logout
import { useState } from 'react';
import { BsArrowLeft, BsSearch, BsLightningFill } from 'react-icons/bs';
import { RiDashboardHorizontalFill, RiLogoutCircleRLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { GiNetworkBars } from 'react-icons/gi';
import { MdCurrencyExchange } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ handleLogout }: { handleLogout: () => void }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const Menus = [
    { title: "Dashboard", icon: <RiDashboardHorizontalFill />, path: "/dashboard" },
    { title: "Market", icon: <GiNetworkBars />, path: "/market" },
    { title: "Exchange", icon: <MdCurrencyExchange />, path: "/exchange" },
    { title: "Profile", icon: <IoSettingsOutline />, path: "/profile" },
  ];

  return (
    <div className="flex">
      <div className={`bg-indigo h-screen p-5 pt-8 flex flex-col items-center shadow-lg ${open ? "w-72" : "w-20"} duration-300 relative`}>
        
        <BsArrowLeft
          className={`bg-white text-indigo-600 text-3xl rounded-full absolute -right-3 top-9 border border-indigo cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex items-center w-full">
          <BsLightningFill className={`bg-amber-300 text-4xl rounded-full cursor-pointer mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white font-semibold text-2xl transition-all duration-300 ${!open && "hidden"}`}>Market Pulse</h1>
        </div>

        <div className={`flex items-center bg-gray-700 rounded-md mt-6 w-full p-2 ${open ? "px-4" : "px-2.5"}`}>
          <BsSearch className="text-white text-lg" />
          <input
            type="search"
            placeholder="Search"
            className={`ml-2 bg-transparent text-white placeholder-gray-300 focus:outline-none w-full ${!open && "hidden"}`}
          />
        </div>

        <div className="flex-grow w-full mt-4"> 
          <ul className="w-full">
            {Menus.map((menu, index) => (
              <li
                key={index}
                onClick={() => navigate(menu.path)}
                className="flex items-center gap-3 p-3 mt-2 rounded-lg cursor-pointer hover:bg-slate-400 transition-all"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-lg">
                  {menu.icon}
                </div>
                <span className={`text-base font-medium text-white transition-all duration-300 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <li
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-400 transition-all w-full "
        >
          <div className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-lg">
            <RiLogoutCircleRLine />
          </div>
          <span className={`text-base font-medium text-white transition-all duration-300 ${!open && "hidden"}`}>
            Logout
          </span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
