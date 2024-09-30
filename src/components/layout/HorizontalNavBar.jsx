import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import profile from "../../assets/profile.png";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { Icon } from "@iconify/react/dist/iconify.js";

const HorizontalNavBar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(12);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getRouteName = () => {
    const path = location.pathname;
    const routes = {
      "/": "Dashboard",
      "/orders": "Orders",
      "/merchant": "Manage Merchant",
      "/onboarding": "Onboarding",
      "/delivery-partner": "Delivery Partner",
      "/menu": "Menu",
      "/report": "Analytics & Report",
      "/marketing": "Marketing",
      "/finance": "Finance",
      "/staffs": "Staffs",
      "/chat": "Chat & Support",
    };
    return routes[path] || "Home";
  };

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <nav
      className={`bg-white text-[#333843] p-4 px-10 flex justify-between border-b border-[#F0F1F3]`}
    >
      <div className="flex items-center gap-5">
        <h1 className="text-xl font-semibold text-[#333843]">
          {getRouteName()}
        </h1>
      </div>

      <div className="flex items-center justify-center gap-5">
        <p className="font-Roboto font-medium">{currentDate}</p>
        <div className="relative">
          <IoNotificationsOutline
            className="text-2xl cursor-pointer mr-4"
            onClick={toggleDropdown}
          />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#509CDB] rounded-full mr-4">
              {notificationCount}
            </span>
          )}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Notification 3
              </a>
            </div>
          )}
        </div>
        <Icon icon="clarity:settings-line" className="w-6 h-6 cursor-pointer" />

        <img
          alt="profile"
          src={profile}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default HorizontalNavBar;
