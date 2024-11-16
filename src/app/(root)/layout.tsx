import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-black text-white">{children}</div>;
};

export default layout;
