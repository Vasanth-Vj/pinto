import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import { Icon } from "@iconify/react/dist/iconify.js";

const VerticalNavBar = ({ isOpen, toggleSideNav }) => {
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const location = useLocation();

  const getIcon = (icon, highlightedIcon, routes) => {
    const currentRoute = location.pathname.split("/").pop();
    return routes.includes(currentRoute) ? highlightedIcon : icon;
  };
  const isActiveTab = (route) => location.pathname.startsWith(route);

  const Menus = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: (
        <Icon icon="radix-icons:dashboard" className="w-6 h-6 text-white" />
      ),
      highlightedIcon: (
        <Icon icon="radix-icons:dashboard" className="w-6 h-6 text-white" />
      ),
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <Icon icon="lets-icons:order" className="w-6 h-6 text-white" />,
      highlightedIcon: (
        <Icon icon="lets-icons:order" className="w-6 h-6 text-white" />
      ),
    },
    {
      title: "Merchant",
      icon: <Icon icon="solar:shop-outline" className="w-6 h-6 text-white" />,
      highlightedIcon: (
        <Icon icon="solar:shop-outline" className="w-6 h-6 text-white" />
      ),
      submenu: true,
      submenuItems: [
        { title: "Manage merchant", path: "/merchant" },
        { title: "Onbaording", path: "/onboarding" },
      ],
      routes: ["merchant", "onboarding"],
    },
    {
      title: "Delivery partner",
      icon: (
        <Icon
          icon="hugeicons:delivery-tracking-02"
          className="w-6 h-6 text-white"
        />
      ),
      highlightedIcon: (
        <Icon
          icon="hugeicons:delivery-tracking-02"
          className="w-6 h-6 text-white"
        />
      ),
      submenu: true,
      submenuItems: [{ title: "Delivery partner", path: "/delivery-partner" }],
      routes: ["delivery-partner"],
    },
    {
      title: "Menu",
      icon: <Icon icon="ep:food" className="w-6 h-6 text-white" />,
      highlightedIcon: <Icon icon="ep:food" className="w-6 h-6 text-white" />,

      submenu: true,
      submenuItems: [{ title: "Menu", path: "/menu" }],
      routes: ["menu"],
    },

    {
      title: "Analytics & Report",
      path: "/report",
      icon: (
        <Icon icon="hugeicons:analytics-up" className="w-6 h-6 text-white" />
      ),
      highlightedIcon: (
        <Icon icon="hugeicons:analytics-up" className="w-6 h-6 text-white" />
      ),
    },
    {
      title: "Marketing",
      path: "/marketing",
      icon: (
        <Icon icon="hugeicons:volume-high" className="w-6 h-6 text-white" />
      ),
      highlightedIcon: (
        <Icon icon="hugeicons:volume-high" className="w-6 h-6 text-white" />
      ),
    },
    {
      title: "Finance",
      path: "/finance",
      icon: (
        <Icon
          icon="material-symbols:finance-mode"
          className="w-6 h-6 text-white"
        />
      ),
      highlightedIcon: (
        <Icon
          icon="material-symbols:finance-mode"
          className="w-6 h-6 text-white"
        />
      ),
    },
    {
      title: "Staffs",
      path: "/staffs",
      icon: (
        <Icon
          icon="clarity:employee-group-line"
          className="w-6 h-6 text-white"
        />
      ),
      highlightedIcon: (
        <Icon
          icon="clarity:employee-group-line"
          className="w-6 h-6 text-white"
        />
      ),
    },
    {
      title: "Chat & support",
      path: "/chat",
      icon: (
        <Icon
          icon="fluent:person-support-16-regular"
          className="w-6 h-6 text-white"
        />
      ),
      highlightedIcon: (
        <Icon
          icon="fluent:person-support-16-regular"
          className="w-6 h-6 text-white"
        />
      ),
    },
    {
      title: "Help center",
      path: "/help",
      icon: <Icon icon="solar:help-linear" className="w-6 h-6 text-white" />,
      highlightedIcon: (
        <Icon icon="solar:help-linear" className="w-6 h-6 text-white" />
      ),
    },
  ];

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleIconClick = () => {
    if (!isOpen) {
      toggleSideNav();
    }
  };

  return (
    <div
      className={`flex flex-col justify-between bg-[#030034] text-white h-full duration-300 ease-in-out ${
        isOpen ? "w-[264px]" : "w-20"
      }`}
    >
      <div className="w-[88.63%] p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            alt="logo"
            src={Logo}
            className="rounded h-9 cursor-pointer duration-500"
            onClick={toggleSideNav}
          />
          <h1
            className={`ml-3 font-rockwell font-normal text-2xl text-white font-inter tracking-[16px] origin-left duration-300 ${
              !isOpen && "scale-0"
            }`}
          >
            PINTO
          </h1>
        </div>

        {/* Main Menus */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <div key={index}>
              <NavLink
                to={menu.path}
                className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-5 h-12 ${
                  isActiveTab(menu.path)
                    ? "bg-[#509CDB] text-white"
                    : "hover:bg-[#3f5c73] hover:text-gray-300 text-white"
                }`}
                onClick={() => {
                  if (menu.title === "Logout") {
                    handleLogoutClick();
                  } else if (menu.submenu) {
                    toggleSubmenu(index);
                  }
                }}
              >
                <span
                  className="text-lg flex items-center justify-center h-full"
                  onClick={handleIconClick}
                >
                  {getIcon(menu.icon, menu.highlightedIcon, menu.routes || [])}
                </span>
                <span
                  className={`text-base font-Roboto font-medium flex-1 duration-200 ${
                    !isOpen && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && isOpen && (
                  <BsChevronDown
                    className={`${submenuOpen === index ? "rotate-180" : ""}`}
                  />
                )}
              </NavLink>
              {menu.submenu && submenuOpen === index && isOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={submenuItem.path}
                      className={({ isActive }) =>
                        `text-sm font-Roboto font-medium flex items-center gap-x-4 cursor-pointer p-2 px-8 mt-1 rounded-md ${
                          isActive
                            ? "bg-[#509CDB] text-white"
                            : "hover:bg-[#3f5c73] text-white"
                        }`
                      }
                    >
                      {submenuItem.title}
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavBar;
