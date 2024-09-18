import React from "react";

const WalletCard = ({ image, name, address, balance, status }) => {
  return (
    <div className="w-full bg-white shadow rounded-lg p-4">
      <div className="flex items-center mb-4">
        <img src={image} alt={`${name} logo`} className="w-10 h-10 mr-2" />
        <div className="text-lg font-semibold">{name}</div>
        <span
          className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
            status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="mb-2">
        <div className="text-sm font-medium text-gray-500">WALLET ADDRESS</div>
        <div className="text-sm break-all">{address}</div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="mb-2">
          <div className="text-sm font-medium text-gray-500">BALANCE</div>
          <div className="text-lg font-semibold">{balance}</div>
        </div>
        <div className="flex items-center">
          <button className="text-blue-600 hover:text-blue-800 font-semibold w-10">
            <img src="/editPen.svg" alt="Edit" />
          </button>
          <button className="text-red-600 hover:text-red-800 ml-4 font-semibold">
            <img src="/bin.svg" alt="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
