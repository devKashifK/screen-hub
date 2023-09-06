"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import SearchResults from "./SearchResults";
import { useDebounce } from "use-debounce";

export default function Search() {
  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 500);

  return (
    <div className="hidden bg-white lg:flex justify-between min-w-[58%] ml-3 max-w-[70%] rounded-sm relative h-max">
      <Select>
        <SelectTrigger className="w-max border-none flex gap-1 justify-center items-center focus:ring-0 border-0 focus:border-none h-8 font-bold text-black p-1 px-2">
          <SelectValue placeholder="All" />
          <span className="icon-[zondicons--cheveron-down]"></span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="top-3">
            <SelectLabel>All</SelectLabel>
            <SelectItem value="apple">Movie</SelectItem>
            <SelectItem value="banana">Tv Shows</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type="search"
        placeholder="Search IMBD"
        className="focus:border-none focus-visible:ring-0 border-0 h-8 text-black"
        onChange={(e) => setSearch(e.target.value)}
      />

      <SearchResults query={query} />
      <span className="icon-[material-symbols--search-rounded] absolute right-3 top-1 text-gray-400 text-2xl"></span>
    </div>
  );
}
