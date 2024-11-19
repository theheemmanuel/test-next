import RightSidebar from "../../Components/RightSidebar";
import LeftSidebar from "../../Components/LeftSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen mx-auto flex">
      <LeftSidebar />
      <div className="flex-1">{children}</div>
      <RightSidebar />
    </div>
  );
};

export default layout;
