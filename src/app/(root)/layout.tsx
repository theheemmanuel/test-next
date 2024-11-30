import Header from "@/components/Header";
import LeftSide from "@/components/LeftSide";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen mx-auto flex font-montserrat mainBody">
      <LeftSide />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
