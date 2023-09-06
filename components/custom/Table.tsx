import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import Link from "next/link";
import { Dot } from "./Dot";
import { Attribute } from "./Typo";
import BlurredImage from "./BlurredImage";

export default function AccordionTable({
  data,
  trigger,
}: {
  data?: any;
  trigger?: any;
}) {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue={data[0].category}
        className="w-full rounded-sm  border-hoverColor  border"
      >
        <>
          {data.map((item: any, index: any) => {
            return (
              <AccordionItem
                value={item.category}
                key={index}
                className="px-4 last-of-type:border-none border-hoverColor  text-co"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex gap-3 items-center ">
                    <h6 className="dark:text-white text-black text-lg">
                      {item.category}
                    </h6>
                    <Dot className="" />
                    <span className="text-gray-500 text-sm">
                      {item.data.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="h-[650px] overflow-auto hide-scroll">
                  <Table key={index}>
                    <TableBody>
                      {item.data.map((item: any, index: number) => {
                        return (
                          <TableRow
                            className="flex hover:bg-transparent justify-between items-center py-2 cursor-pointer border-gray-400 border-b-[1px] "
                            key={index}
                          >
                            {/* <TableCell className="font-medium text-black">
                              {index + 1}
                            </TableCell> */}

                            <TableCell className="flex gap-2 items-center  text-left self-start text-black py-0">
                              <div className="w-[10%] h-20 relative">
                                <BlurredImage poster={item.poster_path} />
                              </div>
                              <div className="w-[90%]">
                                <Link
                                  href={`/title/${item.id}`}
                                  className="hover:underline dark:text-white"
                                >
                                  {item.original_title}
                                </Link>
                                <div className="text-gray-500 hover:no-underline">
                                  <Attribute>
                                    {item.overview.substring(0, 190)}
                                  </Attribute>
                                  <span className="text-textHighlight hover:underline">
                                    ...read more
                                  </span>
                                </div>
                              </div>
                            </TableCell>

                            <TableCell className="flex justify-center items-center gap-5">
                              <div className="flex justify-center items-center gap-1 text-black">
                                <span className="icon-[ic--round-star] text-title text-lg"></span>
                                {item.vote_average.toFixed(1)}
                              </div>
                              <span className="icon-[material-symbols--chevron-right] text-lg text-black"></span>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </>
      </Accordion>
    </div>
  );
}
