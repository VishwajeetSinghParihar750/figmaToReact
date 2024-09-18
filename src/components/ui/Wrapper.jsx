import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function Wrapper({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Adjust for your breakpoint
  const [screenWidth, setScreenWidth] = useState(window.innerWidth >= 1024); // Adjust for your breakpoint

  const toggleNav = () => {
    !isLargeScreen && setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Adjust for your breakpoint
      setScreenWidth(()=>window.innerWidth)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-md fixed h-full transition-transform duration-300 transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <h1 className="font-bold my-12 mx-4">
          <img src="/VANGUARD.svg" alt="" />
        </h1>

        <Navigation />
      </div>

      {/* Overlay */}
      {isNavOpen && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleNav}
        ></div>
      )}

      {/* Main Content */}
      <div className="w-full">
        {/* Header section */}
        <Header onToggleNav={toggleNav} isNavOpen={isNavOpen} screenWidth={screenWidth}/>
        <div
          className={`flex-1 transition-all duration-300 ${
            isLargeScreen ? (isNavOpen ? "ml-64" : "ml-0") : "ml-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
