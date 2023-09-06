import { discover } from "@/app/(services)/contentData";
import { MovieCard } from "@/components/custom/Card";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";
import Header from "../Header";

export default async function page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const page = searchParams.page ? Math.max(1, Number(searchParams.page)) : 1;
  const discoverContent = await discover(params.tab, page);
  return (
    <div>
      <Tabs defaultValue={params.tab} className="w-full mx-auto ">
        <div className="h-20 rounded-sm">
          <Header
            tab={params.tab}
            totalPage={discoverContent.total_pages}
            page={page}
          >
            <Link href={`/discover/movie`}>
              <TabsTrigger
                value="movie"
                className="data-[state=active]:bg-hoverColor w-max"
              >
                Movie
              </TabsTrigger>
            </Link>
            <Link href={`/discover/tv`}>
              <TabsTrigger
                value="tv"
                className="data-[state=active]:bg-hoverColor w-max"
              >
                Tv Shows
              </TabsTrigger>
            </Link>
          </Header>
        </div>

        <TabsContent value={params.tab} className="border-none px-10 py-1">
          <div className="flex gap-3 w-full gap-y-9 flex-wrap">
            {discoverContent.results.map((show: any) => {
              return (
                <MovieCard
                  id={show.id}
                  poster={show.poster_path}
                  key={show.id}
                  title={show.name ? show.name : show.title}
                  rating={show.vote_average}
                  video={show.video}
                  adult={show.adult}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
