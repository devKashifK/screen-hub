import { popularTv } from "@/app/(services)/explore";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Dot } from "./Dot";
import Link from "next/link";
import { Attribute } from "./Typo";
import Image from "next/image";
import BlurredImage from "./BlurredImage";

export default async function PopularTvSeries() {
  const popular = await popularTv();
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue={"Poular TV Series"}
        className="w-full rounded-sm border-none"
      >
        <AccordionItem value={"Poular TV Series"} className="border-none">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex gap-3 items-center ">
              <h6 className="dark:text-white text-black text-lg">
                Poular TV Series
              </h6>
              <Dot />
              <span className="text-gray-500 text-sm">
                {popular.results.length}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="">
            <Table>
              <TableBody className="flex flex-col gap-3 px-1 py-1">
                {popular.results.map((item: any, index: any) => {
                  return (
                    <TableRow
                      className="relative flex rounded-sm border border-hoverColor  hover:bg-transparent justify-between items-center py-2 cursor-pointer "
                      key={index}
                    >
                      <TableCell className="flex gap-2 items-center text-left self-start dark:text-white text-black py-0">
                        <div className="relative w-[20%] h-[100px]">
                          <BlurredImage poster={item.poster_path} />
                        </div>
                        <div className="w-[80%]">
                          <Link
                            href={`/title/${item.id}`}
                            className="hover:underline text-textHighlight"
                          >
                            {item.name}
                          </Link>
                          <div className=" hover:no-underline">
                            <Attribute className=" text-xs">
                              {item.overview.substring(0, 150)}
                            </Attribute>
                            <span className="text-textHighlight hover:underline">
                              ...read more
                            </span>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
