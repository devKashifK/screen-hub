import { cache } from "react";

export const getVideos = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const discoverMovies = cache(async (page: number) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=a5cd106b354c51724555c65f170f79de&page=${page}`;
  const data = await (await fetch(url)).json();
  return data;
});
export const discover = cache(async (type: string, page: number) => {
  const url = `https://api.themoviedb.org/3/discover/${type}?api_key=a5cd106b354c51724555c65f170f79de&page=${page}`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getDetails = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=a5cd106b354c51724555c65f170f79de&append_to_response=credits`;
  const data = await (await fetch(url)).json();
  return data;
});
export const popular = cache(async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=a5cd106b354c51724555c65f170f79de&append_to_response=credits`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getAllVideo = cache(async (id: number) => {
  const detail = await getDetails(id);
  // const relatedMoviesPromises = credits.cast.map(async (item: any) => {
  //   const allVideo = await getVideos({
  //     type: item.media_type,
  //     id: item.id,
  //   });
  //   return allVideo;
  // });
});
export const getCast = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=a5cd106b354c51724555c65f170f79de&append_to_response=credits`;
  const data = await (await fetch(url)).json();
  return data;
});
export const getReview = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a5cd106b354c51724555c65f170f79de&append_to_response=credits`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getImages = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getTopRated = cache(async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getGenres = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=a5cd106b354c51724555c65f170f79de&with_genres=${id}`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getLatest = cache(async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getUpcoming = cache(async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getAllTrailer = cache(async () => {
  const data = await getLatest();
  const promise = await data.results.map((item: any) => getVideos(item.id));
  const video = await Promise.all(promise);
  const trailers = video.map((item) =>
    item.results.filter((result: any) => result.type === "Trailer")
  );
  return trailers.flat();
});
// export const getAllIds = cache(async () => {
//   const latest = await getLatest();
//   const disc = await discover("movie", 1);
//   const popularMovie = await popular();

//   console.log(popularMovie.results.map((item) => item.id));
// });
