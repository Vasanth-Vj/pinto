import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import shop from "../../assets/shop.png"; 

const OnBoarding = () => {
  return (
    <div>
      <div className="flex p-6 gap-6">
        <div className="flex flex-col items-center gap-6 w-[230px] rounded-xl border border-[#509CDB] bg-[#509CDB] bg-opacity-10 p-4 shadow-md">
          <div className="flex items-center gap-2">
            <Icon
              icon="fluent-mdl2:product"
              className="w-5 h-5 text-[#509CDB]"
            />
            <p className="font-Roboto text-[18px] font-medium text-[#509CDB]">
              Pending approval
            </p>
          </div>
          <div>
            <h1 className="text-[#509CDB] font-Roboto font-bold text-[36px]">
              12
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-[230px] rounded-xl border border-[#FF1C1C] bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <Icon
              icon="fluent-mdl2:product"
              className="w-5 h-5 text-[#FF1C1C]"
            />
            <p className="font-Roboto text-[18px] font-medium text-[#FF1C1C]">
              Rejected{" "}
            </p>
          </div>
          <div>
            <h1 className="text-[#FF2121] font-Roboto font-bold text-[36px]">
              05
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-[230px] rounded-xl border border-[#D5D5D5] bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <Icon icon="gala:add" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[#363636] font-Roboto text-[18px]">
              Add New Merchant
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 p-6 ">
        <div className="flex items-center justify-between gap-2 rounded-lg border border-[#A7D7FF] p-2 w-[146px]">
          <p className="text-[#030714] font-inter text-[18px]">Pending</p>
          <button>
            <Icon icon="iconamoon:arrow-down-2-light" className="w-8 h-8" />
          </button>
        </div>

        <div className="flex gap-4 items-center w-[327px] rounded-lg border border-[#D7D7D7] bg-white p-2">
          <div></div>
          <Icon icon="prime:search" className="w-8 h-8" />

          <input
            type="search"
            placeholder="Search merchant"
            className="focus:outline-none"
          />
        </div>
      </div>

     
      <div className="overflow-x-auto overflow-y-auto mt-6 mx-4 max-h-[66.4vh] max-w-[1230px] pb-5 pl-5">
        <table className="min-w-max border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#F0F8FF] text-[#A3A3A3]">
              <th className="sticky top-0   text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                SHOP NAME
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3]px-4 py-3">
                GSTIN
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                FSSAI
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                Per%
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                CATEGORY
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                ADDRESS
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                PHONE NUMBER
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                EMAIL
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                TIMINGS
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                OWNER
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                MENU
              </th>
              <th className="sticky top-0 text-center font-normal text-[18px] bg-[#F0F8FF] text-[#A3A3A3] px-4 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">KFC</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Thalapakkatti Biryani</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Ponram Biryani</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Velu Biryani</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Aachi’s Restaurant</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">McDonalds</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">PizzaHut</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Subway</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-3 flex items-center gap-2">
               <img src={shop} alt="shop image" className="w-6 h-6"/>
               <p className="font-bold font-inter text-[#464E5B]">Burger King</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              29GGGGG1314R9Z6
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              12%
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Fast Food
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="heroicons:magnifying-glass-plus-solid" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              9988776655
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              merchant@gmail.com
              </td>
              <td className="flex gap-4 text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              <p className="font-inter text-[#464E5B]">08:00 AM</p>
              <p className="font-inter text-[#464E5B]">11:00 AM</p>
              </td>
              <td className="text-left text-[14px] px-4 py-3 font-bold font-inter text-[#464E5B]">
              Vinoth Kumar
              </td>
              <td className="flex justify-center items-center px-4 py-3 ">
              <Icon icon="lucide:eye" className="w-6 h-6 text-[#008BFF]" />
              </td>
              <td className="text-left text-[15px] px-4 py-3">
                <div className="flex items-center justify-between gap-2 w-[135px]">
                  <button className="text-[#FF0000] rounded-xl border border-[#FF0000] bg-[#FF0000] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Reject
                  </button>
                  <button className="text-[#008B0E] rounded-xl border border-[#008B0E] bg-[#008B0E] bg-opacity-10 p-[10px] font-Roboto text-[12px] w-[60px]">
                    Launch
                  </button>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnBoarding;
