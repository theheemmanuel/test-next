import Empty from "@/components/Empty";
import React from "react";

const Orders = () => {
  return (
    <div className="px-6">
      <h1 className="font-bold text-xl">My Orders</h1>
      <Empty textBody="No Orders Found." />
      <div></div>
    </div>
  );
};

export default Orders;
