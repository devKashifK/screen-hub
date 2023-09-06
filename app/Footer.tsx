import { Title } from "@/components/custom/Typo";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      {/* <div className="p-4">
        <Title className="font-bold text-2xl">Recently Viewed</Title>
      </div> */}
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <Title className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 IMDb Clone™ All Rights Reserved
        </Title>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/discover/movie"
              className="mr-4 hover:underline md:mr-6 "
            >
              Discover Movie
            </Link>
          </li>
          <li>
            <Link href="/discover/tv" className="mr-4 hover:underline md:mr-6">
              Discover Shows
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
