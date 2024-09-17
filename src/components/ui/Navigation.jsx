import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "dashboard",
    text: "Dashboard",
    image: "/dashboard.svg",
    selImage: "/dashboardSel.svg",
    url: "/dashboard",
  },
  {
    name: "leaderboard",
    text: "Leaderboard",
    image: "/leaderboard.svg",
    selImage: "/leaderboardSel.svg",
    url: "/",
  },
  {
    name: "pastWinners",
    text: "Past Winners",
    image: "/pastWinners.svg",
    selImage: "/pastWinnersSel.svg",
    url: "/pastWinners",
  },
  {
    name: "wallets",
    text: "Wallets",
    image: "/wallets.svg",
    selImage: "/walletsSel.svg",
    url: "/wallets",
  },
  {
    name: "subscription",
    text: "Subscription",
    image: "/subscription.svg",
    selImage: "/subscriptionSel.svg",
  },
  {
    name: "referral",
    text: "Referral Program",
    image: "/referral.svg",
    selImage: "/referralSel.svg",
    url: "/referral",
  },
];
const navItems2 = [
  {
    name: "settings",
    text: "Settings",
    image: "/settings.svg",
    selImage: "/settingsSel.svg",
  },
  {
    name: "logout",
    text: "Logout",
    image: "/logout.svg",
    selImage: "/logoutSel.svg",
  },
];

function Navigation(props) {
  const location = useLocation();

  const url = location.pathname;

  return (
    <nav className="mb-4">
      {navItems.map((item, i) => {
        let isSelected = item.url == url;
        return (
          <Link to={item.url} className="relative flex items-center">
            {isSelected && (
              <span
                className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#FF9040] rounded-r"
                style={{ borderRadius: "0 5px 5px 0" }}
              />
            )}
            <div
              className=" py-[10px] no-underline text-gray-700 rounded flex items-center mx-4 w-60"
              style={
                isSelected ? { backgroundColor: "#FF9040", color: "white" } : {}
              }
            >
              <img
                src={isSelected ? item.selImage : item.image}
                alt=""
                className="px-2 "
              />
              <span className="ml-2 ">{item.text}</span>
            </div>
          </Link>
        );
      })}

      {/* Separator line */}
      <div className="my-2 border-t border-gray-300"></div>

      {navItems2.map((item, i) => {
        let isSelected = item.url == url;
        return (
          <Link to={item.url} className="relative flex items-center">
            {isSelected && (
              <span
                className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#FF9040] rounded-r"
                style={{ borderRadius: "0 5px 5px 0" }}
              />
            )}
            <div
              className=" py-[10px] no-underline text-gray-700 rounded flex items-center mx-4 w-60"
              style={
                isSelected ? { backgroundColor: "#FF9040", color: "white" } : {}
              }
            >
              <img
                src={isSelected ? item.selImage : item.image}
                alt=""
                className="px-2 "
              />
              <span className="ml-2 ">{item.text}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;
