
import { useState } from "react";
import { BsArrowLeft, BsSearch, BsLightningFill } from "react-icons/bs";
import { RiDashboardHorizontalFill, RiLogoutCircleRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";

function SideBar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard" },
    { title: "Market", icon: <GiNetworkBars /> },
    { title: "Exchange", icon: <MdCurrencyExchange /> },
    { title: "Setting", icon: <IoSettingsOutline /> },
    { title: "Logout", spacing: true, icon: <RiLogoutCircleRLine /> }, // Added icon for Logout
  ];

  return (
    <div className="flex">
      <div
        className={`bg-indigo h-screen p-5 pt-8 flex flex-col items-center shadow-lg ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        {/* Toggle Button */}
        <BsArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Sidebar Logo and Title */}
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

        {/* Search Bar */}
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

        {/* Menu Items */}
        <ul className="pt-4 w-full">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-3 mt-2 rounded-lg cursor-pointer hover:bg-indigo-700 transition-all ${
                menu.spacing ? "mt-12" : ""
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
      <div className="p-7 w-full">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>
    </div>
  );
}

export default SideBar;
