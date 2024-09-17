import React from "react";
import Wrapper from "./ui/Wrapper";

function Referral(props) {
  return (
    <Wrapper>
      <div className="mt-4 p-10 pt-0 bg-gray-100 ">
        <div className="mb-8">
          <h2 className="text-3xl text-gray-800 mb-2">Referral Program</h2>
          <span className="text-orangeNew">
            Earn 20% subscription fee commission on every referral
          </span>
        </div>

        <div className="flex ">
          <div className="w-64 bg-white p-5 flex items-center rounded-2xl mr-6 shadow-md">
            <img src="/group.svg" alt="" className="mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-xl">15</span>
              <span className="text-xs text-[#60656E]">Total Referrals</span>
            </div>
          </div>
          <div className="w-64 bg-white p-5 flex items-center rounded-2xl shadow-md">
            <img src="/group.svg" alt="" className="mr-2" />
            <div className="flex flex-col">
              <span className="font-medium text-xl">$ 1,050</span>
              <span className="text-xs text-[#60656E]">Total Commission</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 mt-8">
          <div className="mb-8">
            <h2 className="text-xl text-gray-800 ">Referral Program</h2>
            <span className="text-orangeNew text-sm">
              Earn 20% subscription fee commission on every referral
            </span>
          </div>

          <div className="flex ">
            <input
              required
              id="address"
              type="text"
              className="p-2 border border-gray-300 rounded-lg mr-3 flex-1 outline-none"
              placeholder="tradingcontest.com/invite/username"
            />
            <button className=" p-2 border rounded-lg text-orangeNew bg-[#FFEEE1] flex items-center ">
              <img src="/copy.svg" alt="" className="mr-2" />
              <span>Copy Referral Link </span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Referral;
