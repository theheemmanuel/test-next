import Users from "@/components/Users";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl italic">Next JS</h1>
      <Link href="/settings"></Link>
      <Users />
    </div>
  );
};

export default Home;
