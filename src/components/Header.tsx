"use client";

import React from "react";
import { Skeleton } from "./ui/skeleton";
import { RiMenu4Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { RiListOrdered2 } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "/public/assets/images/logo.png";

const Header = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="md:p-6 p-4 flex justify-between gap-6 items-center">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full bg-zinc-400" />
          <div>
            <h1 className="text-xl">
              Welcome 👋 <span className="font-bold">Oluwatosin</span>
            </h1>
          </div>
        </div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <RiMenu4Fill size={30} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-3">
                <SheetTitle>
                  <Image src={logo} alt="logo" className="rounded-xl p-2" />
                </SheetTitle>
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={`${
                      pathName === "/" ? "font-bold bg-orange-500" : ""
                    } px-4 py-2 hover:bg-orange-500 rounded-lg`}
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <IoHomeOutline size={20} />
                      <p className="text-lg">Home</p>
                    </div>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/orders"
                    className={`${
                      pathName.includes("/orders")
                        ? "font-bold bg-orange-500"
                        : ""
                    } px-4 py-2 hover:bg-orange-500 rounded-lg`}
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <RiListOrdered2 size={20} />
                      <p className="text-lg">My Orders</p>
                    </div>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/wallet"
                    className={`${
                      pathName.includes("/wallet")
                        ? "font-bold bg-orange-500"
                        : ""
                    } px-4 py-2 hover:bg-orange-500 rounded-lg`}
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <IoWalletOutline size={20} />
                      <p className="text-lg">My Wallet</p>
                    </div>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/profile"
                    className={`${
                      pathName.includes("/profile")
                        ? "font-bold bg-orange-500"
                        : ""
                    } px-4 py-2 hover:bg-orange-500 rounded-lg`}
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <RiAccountCircleLine size={20} />
                      <p className="text-lg">Profile</p>
                    </div>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/settings"
                    className={`${
                      pathName.includes("/settings")
                        ? "font-bold bg-orange-500"
                        : ""
                    } px-4 py-2 hover:bg-orange-500 rounded-lg`}
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <IoSettingsOutline size={20} />
                      <p className="text-lg">Settings</p>
                    </div>
                  </Link>
                </SheetClose>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Header;
