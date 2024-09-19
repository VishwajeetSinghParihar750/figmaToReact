import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const navItems = [
  {
    name: "dashboard",
    text: "Dashboard",
    image: "/dashboard.svg",
    selImage: "/dashboardSel.svg",
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

function Navigation(props) {
  const location = useLocation();

  const { user, loading, login, logout } = useAuth();

  const navItems2 = [
    {
      name: "settings",
      text: "Settings",
      image: "/settings.svg",
      selImage: "/settingsSel.svg",
    },
    {
      name: user ? "Logout" : "Login",
      text: user ? "Logout" : "Login",
      image: "/discordIcon.svg",
      selImage: "/logoutSel.svg",
    },
  ];

  const url = location.pathname;

  const handleDiscordLoginLogout = async () => {
    if (user) {
      await logout();
    } else {
      login();
    }
  };

  return (
    <nav className="mb-4 ">
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
              className=" py-[10px] px-3 no-underline text-gray-700 rounded flex items-center mx-6 w-60"
              style={
                isSelected
                  ? {
                      backgroundColor: "#FF9040",
                      color: "white",
                      fontWeight: "600",
                    }
                  : {}
              }
            >
              <img
                src={isSelected ? item.selImage : item.image}
                alt=""
                className="px-2  "
              />
              <span className="ml-2 ">{item.text}</span>
            </div>
          </Link>
        );
      })}

      {/* Separator line */}
      <div className="my-3 border-t border-gray-300"></div>
      <Link to={navItems2[0].url} className="relative flex items-center">
        {navItems2[0].url == url && (
          <span
            className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#FF9040] rounded-r"
            style={{ borderRadius: "0 5px 5px 0" }}
          />
        )}
        <div
          className=" py-[10px] px-3 no-underline text-gray-700 rounded flex items-center mx-6 w-60"
          style={
            navItems2[0].url == url
              ? {
                  backgroundColor: "#FF9040",
                  color: "white",
                  fontWeight: "600",
                }
              : {}
          }
        >
          <img
            src={
              navItems2[0].url == url
                ? navItems2[0].selImage
                : navItems2[0].image
            }
            alt=""
            className="px-2  "
          />
          <span className="ml-2 ">{navItems2[0].text}</span>
        </div>
      </Link>
      <Link
        to={navItems2[1].url}
        className="relative flex items-center"
        onClick={handleDiscordLoginLogout}
      >
        <div className=" py-[10px] px-3 no-underline text-gray-700 rounded flex items-center mx-6 w-60">
          <img src={navItems2[1].image} alt="" className="px-2 w-9" />
          <span className="ml-2">{navItems2[1].text}</span>{" "}
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
