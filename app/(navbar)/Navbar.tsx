"use client";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Search from "@/components/custom/Search";
import Image from "next/image";

export default function Navbar() {
  const [search, setSearch] = useState(false);
  return (
    <nav className="bg-black border-gray-200 dark:bg-black relative">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-2">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="mr-3 object-cover"
              alt="Imbd Logo"
              width={64}
              height={32}
            />
          </Link>
          <Sheet>
            <SheetTrigger className=" px-2 rounded-sm text-white hover:bg-hoverColor font-medium dark:text-white flex justify-center items-center gap-1 text-sm">
              <span className="icon-[solar--hamburger-menu-linear] w-5 h-5 "></span>
              Menu
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <Search />
        <div className="flex items-center md:order-2">
          <div className="hidden lg:flex">
            <Link
              href={"/discover/movie"}
              className="dark:text-white flex gap-2"
            >
              Discover
              <Separator orientation="vertical" className="bg-hoverColor" />
            </Link>
          </div>

          <div className="hidden md:flex lg:hidden justify-between rounded-sm  h-max">
            {search ? (
              <>
                <Input
                  type="email"
                  placeholder="Search IMBD"
                  className="focus:border-none focus-visible:ring-0 border-0 w-[100%] z-10 h-full bg-[#252525] absolute top-0 left-0 text-white"
                />
                <span
                  className="icon-[material-symbols--close] z-10 text-white absolute top-4.5 text-2xl cursor-pointer right-2"
                  onClick={() => setSearch(!search)}
                ></span>
              </>
            ) : (
              ""
            )}

            <span
              className="icon-[material-symbols--search-rounded]  text-white text-2xl cursor-pointer"
              onClick={() => setSearch(!search)}
            ></span>
          </div>

          <Link
            href="#"
            className="text-white dark:text-white hover:bg-hoverColor font-medium rounded-sm text-sm px-2 py-1 md:px-4 md:py-2 mr-1 md:mr-2 flex gap-1 justify-center items-center"
          >
            <span className="icon-[icon-park-solid--creative]"></span>
            Watchlist
          </Link>
          <Link
            href="#"
            className="text-white dark:text-white hover:bg-hoverColor font-medium rounded-sm text-sm px-2 py-1 md:px-4 md:py-2 mr-1 md:mr-2 dark:hover:bg-hoverColor flex gap-1 justify-center items-center"
          >
            Sign In
          </Link>
          <Select>
            <SelectTrigger className="w-max border-none flex gap-1 justify-center items-center focus:ring-0 border-0 focus:border-none h-8 font-bold dark:text-white">
              <SelectValue placeholder="EN" />
              <span className="icon-[zondicons--cheveron-down] text-white"></span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>All</SelectLabel>
                <SelectItem value="apple">English</SelectItem>
                <SelectItem value="banana">Hindi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              /> */}
            {/* </svg> */}
          </button>
        </div>
      </div>
    </nav>
  );
}
