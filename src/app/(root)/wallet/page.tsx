import Empty from "@/components/Empty";
import RightSide from "@/components/RightSide";
import React from "react";

const Wallet = () => {
  return (
    <div className="px-6">
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-bold text-xl">My Wallet</h1>
          <Empty textBody="No Wallet History" />
        </div>
        <div className="lg:block hidden w-1/3">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
