import React from "react";
import { useLocation } from "react-router-dom";

const pages = [
  {
    text: "Leaderboard",

    url: "/",
  },
  {
    text: "Past Winners",

    url: "/pastWinners",
  },
  {
    text: "Wallets",

    url: "/wallets",
  },

  {
    text: "Referral Program",

    url: "/referral",
  },
];

function Header({ onToggleNav, isNavOpen, screenWidth }) {
  const location = useLocation();
  const url = location.pathname;

  const currentPageText = pages.find((i) => i.url == url)?.text;

  console.log(
    isNavOpen,
    screenWidth < 740,
    isNavOpen && screenWidth < 740 ? "hidden" : ""
  );

  return (
    <div
      className={`h-20 bg-white flex items-center justify-between flex-1  transition-all duration-300 ${
        isNavOpen ? "ml-64" : "ml-0"
      }`}
    >
      <div className="flex items-center mx-10 max-sm:justify-between max-xs:flex-1  ">
        <img
          src="/options.svg"
          alt=""
          className="mr-4 cursor-pointer"
          onClick={onToggleNav}
        />
        <div className={`text-lg xs:hidden mx-auto translate-x-[10%] ${isNavOpen && "hidden"}`}>
          {currentPageText}
        </div>

        <div className="relative max-w-72 rounded-3xl border max-xs:hidden">
          <img
            src="/search.svg"
            alt=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          {
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 w-full rounded-3xl border bg-[#F3F3F3] focus:outline-none border-none "
            />
          }
        </div>
      </div>
      <div
        className={`flex items-center mr-10  ${
          isNavOpen && screenWidth < 740 ? "hidden" : ""
        } `}
      >
        <img src="/user1.svg" alt="" className="w-10 h-10 rounded-full" />
        <span className="font-medium mx-3 max-sm:hidden">Username</span>
        <img src="/downArrow.svg" alt="" className="max-sm:hidden" />
      </div>
    </div>
  );
}

export default Header;
