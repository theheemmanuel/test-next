// import { SkeletonCircle } from "@/components/Loading";
import React from "react";
import RightSide from "@/components/RightSide";
import SocialList from "@/components/SocialList";

const Home = () => {
  return (
    <>
      <div className="flex px-6 gap-4">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">
            Promote your social accounts!
          </h1>
          <SocialList />
        </div>
        <div className="lg:block hidden w-1/3">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
