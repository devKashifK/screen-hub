"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Title } from "./Typo";
import ContentSlide from "./ContentSlide";

export default function ContentProviders({ data }: any) {
  return (
    <Tabs
      defaultValue={Object.keys(data)[0]}
      className="w-full h-[480px] flex flex-col gap-8"
    >
      <TabsList className="flex gap-8 items-start w-full justify-start bg-transparent">
        {Object.keys(data).map((item: string) => (
          <TabsTrigger
            key={item}
            className="data-[state=active]:border-b-4 border-title rounded-none"
            value={item}
          >
            <Title className="font-bold">{item}</Title>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(data).map(([key, item]) => (
        <TabsContent value={key} key={key} className="w-full flex">
          <ContentSlide data={item} slides={6} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
