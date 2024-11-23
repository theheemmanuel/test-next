import Users from "@/components/Users";
import Link from "next/link";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl italic">Next JS</h1>
      <Link href="/settings"></Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default Home;
