import { getGenres } from "@/app/(services)/contentData";
import { Heading } from "@/components/custom/Heading";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot } from "@/components/custom/Dot";
import { Attribute, Title } from "@/components/custom/Typo";
import Link from "next/link";
import BlurredImage from "@/components/custom/BlurredImage";

export default async function Realted({ genres }: { genres: any }) {
  const relatedMoviesPromises = genres.map(async (genre: any) => {
    const relatedMovies = await getGenres(genre.id);
    return { genreName: genre.name, relatedMovies };
  });

  const relatedMoviesData = await Promise.all(relatedMoviesPromises);

  return (
    <div className="flex flex-col gap-5">
      <Heading>More Like This</Heading>

      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue={relatedMoviesData[0].genreName}
          className="w-full rounded-sm  border-hoverColor  border"
        >
          {relatedMoviesData.map((item: any, index: any) => {
            return (
              <AccordionItem
                value={item.genreName}
                key={index}
                className="px-4 last-of-type:border-none border-hoverColor  text-co"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex gap-3 items-center ">
                    <Title>{item.genreName}</Title>
                    <Dot className="bg-black" />
                    <Attribute>{item.relatedMovies.results.length}</Attribute>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="h-72 overflow-auto hide-scroll">
                  <Table key={index}>
                    <TableBody>
                      {item.relatedMovies.results.map((item: any) => {
                        return (
                          <TableRow
                            className="flex justify-between items-center py-2 cursor-pointer border-gray-400 border-b-[1px] hover:bg-transparent"
                            key={item.id}
                          >
                            {/* <TableCell className="font-medium text-black">
                              {index + 1}
                            </TableCell> */}

                            <TableCell className="flex gap-2 items-center text-left self-start text-black py-0">
                              <div className="relative w-[10%] h-20">
                                <BlurredImage poster={item.poster_path} />
                              </div>
                              <div className="flex flex-col gap-1 w-[90%]">
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
        </Accordion>
      </div>
      {/* <Table className="flex gap-20 h-64">
          {relatedMoviesData.map((genreData) => (
            <div key={genreData.genreName}>
              <TableBody className="h-full ">
                <TableCaption className="text-xl dark:text-white font-bold">
                  {genreData.genreName}
                </TableCaption>
                {genreData.relatedMovies.results.map(
                  (movie: any, index: number) => (
                    <div
                      className="h-full overflow-scroll hide-scroll"
                      key={index}
                    >
                      <TableRow
                        className="cursor-pointer dark:border-white"
                        key={index}
                      >
                        <TableCell className="font-medium">
                          {index + 1}
                        </TableCell>
                        <TableCell className="hover:underline">
                          {movie.title}
                        </TableCell>
                        <TableCell className="flex justify-center items-center gap-5">
                          <div className="flex justify-center items-center gap-1">
                            <span className="icon-[ic--round-star] text-title text-lg"></span>
                            {movie.vote_average.toFixed(1)}
                          </div>
                          <span className="icon-[material-symbols--chevron-right] text-lg text-white"></span>
                        </TableCell>
                      </TableRow>
                    </div>
                  )
                )}
              </TableBody>
            </div>
          ))}
        </Table> */}
    </div>
  );
}
