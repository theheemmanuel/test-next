import React from "react";
import { Skeleton } from "./ui/skeleton";

const Header = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-full bg-zinc-400" />
        <div>
          <h1 className="text-xl">
            Welcome, <span className="font-bold">Oluwatosin 👋</span>
          </h1>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default Header;
