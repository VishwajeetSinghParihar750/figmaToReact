import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
const navItems2 = [
  {
    name: "settings",
    text: "Settings",
    image: "/settings.svg",
    selImage: "/settingsSel.svg",
  },
  {
    name: "Login",
    text: "Login",
    image: "/discordIcon.svg",
    selImage: "/logoutSel.svg",
  },
];

function Navigation(props) {
  const location = useLocation();

  const url = location.pathname;

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
      <Link to={navItems2[1].url} className="relative flex items-center ">
        <div
          className="py-2 px-4 no-underline flex items-center mx-6 w-60 rounded-lg"
          style={{
            backgroundColor: "#7289da", // Discord's primary blue
            color: "white",
            fontWeight: "600",
            borderRadius: "12px", // Increased border radius for a rounded look
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Add subtle shadow for depth
          }}
        >
          <img
            src={navItems2[1].image}
            alt=""
            className="px-2 w-10"
            style={{ borderRadius: "50%" }} // Make image circular
          />
          <span className="ml-3 text-lg">{navItems2[1].text}</span>{" "}
          {/* Adjusted spacing and font size */}
        </div>
      </Link>
    </nav>
  );
}

export default Navigation;
