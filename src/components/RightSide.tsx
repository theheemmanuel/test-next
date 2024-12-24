import Link from "next/link";
import React from "react";
import Empty from "./Empty";

const RightSide = () => {
  return (
    <div className="border-l-2 px-4 min-h-[90vh]">
      <div className="flex flex-col items-center gap-4 bg-orange-500 text-white rounded-2xl py-6">
        <p>Wallet Balances</p>
        <p className="font-bold text-2xl">₦{(1050.68).toLocaleString()}</p>
        <button className="border-white border-2 py-2 px-4 bg-[#ffffff4d] font-semibold text-lg rounded-xl">
          Add Funds
        </button>
      </div>
      <div className="my-6">
        <div className="flex justify-between items-center">
          <p>Recents Orders</p>
          <Link href="/orders">
            <p>View All</p>
          </Link>
        </div>
      </div>
      <Empty textBody="No recent orders" />
    </div>
  );
};

export default RightSide;
