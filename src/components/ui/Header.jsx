import React from 'react';

function Header(props) {
    return (
        <div className="h-20 bg-white flex items-center justify-between">
        <div className="flex mx-10">
          <img src="/options.svg" alt="" className="mr-4" />
          <div className="relative w-72 max-w-xs rounded-3xl  border  ">
            <img
              src="/search.svg"
              alt=""
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 w-full rounded-3xl border bg-[#F3F3F3] focus:outline-none border-none outline-none"
            />
          </div>
        </div>
        <div className="flex items-center mx-10">
          <img src="/user1.svg" alt="" className="w-10 h-10 rounded-full" />
          <span className="font-medium mx-3 ">Username</span>
          <img src="/downArrow.svg" alt="" />
        </div>
      </div>
    );
}

export default Header;