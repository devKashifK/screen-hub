import { cache } from "react";

export const getPerson = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonCombineCredits = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonChanges = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/changes?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonExternalIds = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonLatest = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/latest?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});
export const getPersonImages = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/images?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonMovie = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonTV = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonTaggedImages = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPersonTranslation = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/person/${id}/translations?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getVideos = cache(
  async ({ type, id }: { type: string; id: number }) => {
    const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=a5cd106b354c51724555c65f170f79de`;
    const data = await (await fetch(url)).json();
    return data;
  }
);

export const getAllTrailer = cache(async (id: number) => {
  const credits = await getPersonCombineCredits(id);
  const relatedMoviesPromises = credits.cast.map(async (item: any) => {
    const relatedMovies = await getVideos({
      type: item.media_type,
      id: item.id,
    });
    return relatedMovies;
  });

  const relatedTrailer = await Promise.all(relatedMoviesPromises);
  const trailerVideos = relatedTrailer.reduce((accumulator, item) => {
    const trailers = item.results.filter(
      (result: any) => result.type === "Trailer"
    );
    return accumulator.concat(trailers);
  }, []);
  return trailerVideos;
});

export const getPersonAllImage = cache(async (id: number) => {
  interface ImageInfo {
    file_path: string;
    width: number;
    height: number;
  }
  const imagePath: ImageInfo[] = [];
  const image = await getPersonImages(id);
  const taggedImages = await getPersonTaggedImages(id);
  const first = image.profiles.forEach((item: any) => {
    imagePath.push({
      file_path: item.file_path,
      width: item.width,
      height: item.height,
    });
  });
  const second = taggedImages.results.forEach((item: any) => {
    imagePath.push({
      file_path: item.file_path,
      width: item.width,
      height: item.height,
    });
  });
  return imagePath;
});

// https://api.themoviedb.org/3/trending/tv/
