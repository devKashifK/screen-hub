import ReactPlayer from "react-player";

export default function VideoTiles({ id }: { id: string }) {
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${id}`}
        width="100%"
        height="100%"
        light={true}
      />
    </>
  );
}
