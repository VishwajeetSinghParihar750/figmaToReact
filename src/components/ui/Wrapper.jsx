import React from "react";

function Wrapper({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed h-full">
        <h1 className="font-bold my-12 mx-4">
          <img src="/VANGUARD.svg" alt="" />
        </h1>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* header section */}

        <Header />

        {children}
      </div>
    </div>
  );
}

export default Wrapper;
