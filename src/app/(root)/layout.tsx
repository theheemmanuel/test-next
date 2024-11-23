import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen mx-auto flex">
      <LeftSide />
      <div className="flex-1">{children}</div>
      <div className="md:hidden block">
        <RightSide />
      </div>
    </div>
  );
};

export default layout;
