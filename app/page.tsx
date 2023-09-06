import Navbar from "./(navbar)/Navbar";
import { Heading, Title } from "@/components/custom/Heading";
import { getAllTrailer, getUpcoming, popular } from "./(services)/contentData";
import ContentSlide from "@/components/custom/ContentSlide";
import ContentProviders from "@/components/custom/Providers";
import { categorizeData } from "./(services)/Tv";
import Hero from "@/components/custom/Hero";
import { NowPlaying } from "./NowPlaying";
import Footer from "./Footer";

export default async function Home() {
  const data = await popular();
  const tv = await categorizeData();
  const trailer = await getAllTrailer();
  const upcoming = await getUpcoming();

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-8 px-4">
        <div className="">
          <Hero trailer={trailer} upcoming={upcoming} />
        </div>
        <div className="flex flex-col gap-10">
          <Title>What To Watch</Title>
          <Heading>Popular</Heading>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex w-full gap-2 overflow-hidden">
            <ContentSlide data={data.results} slides={6} />
          </div>
          <div className="w-full flex flex-col gap-10  overflow-hidden">
            <Heading>Streaming</Heading>
            <ContentProviders data={tv} />
          </div>
          <NowPlaying />
        </div>
      </div>
      <Footer />
    </div>
  );
}
