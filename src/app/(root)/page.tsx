import { SkeletonCircle } from "@/components/Loading";
import RightSide from "@/components/RightSide";
import Socials from "@/components/Socials";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <>
      <div className="flex px-6 gap-4">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">
            Promote your social accounts!
          </h1>
          <Suspense
            fallback={
              <div className="flex flex-wrap gap-6">
                {[1, 2, 3, 4, 5].map((each) => (
                  <SkeletonCircle key={each} />
                ))}
              </div>
            }
          >
            <Socials />
          </Suspense>
        </div>
        <div className="lg:block hidden w-1/3">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
