"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiListOrdered2 } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const LeftSide = () => {
  const pathName = usePathname();
  return (
    <div className="border-r-2 p-6 md:w-[270px]">
      <ul className="flex flex-col gap-3">
        <Image src={logo} alt="logo" className="rounded-xl p-2" />
        <Link
          href="/"
          className={`${
            pathName === "/" ? "font-bold bg-orange-500" : ""
          } px-4 py-2 hover:bg-orange-500 rounded-lg`}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            <IoHomeOutline size={20} />
            <p className="text-lg max-md:hidden">Home</p>
          </div>
        </Link>
        <Link
          href="/orders"
          className={`${
            pathName.includes("/orders") ? "font-bold bg-orange-500" : ""
          } px-4 py-2 hover:bg-orange-500 rounded-lg`}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            <RiListOrdered2 size={20} />
            <p className="text-lg max-md:hidden">My Orders</p>
          </div>
        </Link>
        <Link
          href="/wallet"
          className={`${
            pathName.includes("/wallet") ? "font-bold bg-orange-500" : ""
          } px-4 py-2 hover:bg-orange-500 rounded-lg`}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            <IoWalletOutline size={20} />
            <p className="text-lg max-md:hidden">My Wallet</p>
          </div>
        </Link>
        <Link
          href="/profile"
          className={`${
            pathName.includes("/profile") ? "font-bold bg-orange-500" : ""
          } px-4 py-2 hover:bg-orange-500 rounded-lg`}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            <RiAccountCircleLine size={20} />
            <p className="text-lg max-md:hidden">Profile</p>
          </div>
        </Link>
        <Link
          href="/settings"
          className={`${
            pathName.includes("/settings") ? "font-bold bg-orange-500" : ""
          } px-4 py-2 hover:bg-orange-500 rounded-lg`}
        >
          <div className="flex gap-2 items-center cursor-pointer">
            <IoSettingsOutline size={20} />
            <p className="text-lg max-md:hidden">Settings</p>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default LeftSide;
