import { cache } from "react";

export const nowPlaying = cache(async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});
export const popularTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const trendingPerson = cache(async () => {
  const url = `https://api.themoviedb.org/3/trending/person/week?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});
export const searchMulti = cache(async (query: any) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const shuffledComponent = (array: any) => {
  const shuffledArray = [...array];
  shuffledArray.forEach((_, currentIndex) => {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  });
  return shuffledArray;
};

export const generateRandomString = (length: any) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";

  [...Array(length)].forEach(() => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  });

  return randomString;
};
