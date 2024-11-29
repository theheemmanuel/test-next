import React from "react";

const RightSide = () => {
  return (
    <div className="border-l-2 border-zinc-400 px-4 min-h-[90vh]">
      <div className="flex flex-col items-center gap-4 bg-orange-500 text-white rounded-2xl py-6">
        <p>Wallet Balances</p>
        <p className="font-bold text-2xl">₦100.68</p>
        <button className="border-white border-2 py-2 px-4 bg-[#ffffff4d] font-semibold text-lg rounded-xl">
          Add Funds
        </button>
      </div>
    </div>
  );
};

export default RightSide;
