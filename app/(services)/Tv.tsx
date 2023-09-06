import { watch } from "fs/promises";
import { cache } from "react";

export const getTrendingTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getTopRatedTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getPopularTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});
export const getOnAirTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});

export const getAiringTodayTv = cache(async () => {
  const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=a5cd106b354c51724555c65f170f79de`;
  const data = await (await fetch(url)).json();
  return data;
});
export const discoverTv = cache(async (page: number) => {
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=a5cd106b354c51724555c65f170f79de&page=${page}`;
  const data = await (await fetch(url)).json();
  return data;
});

export const watchProvider = cache(async (id: number) => {
  const url = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=a5cd106b354c51724555c65f170f79de`;
  //www.themoviedb.org/tv/2734-law-order-special-victims-unit/watch?locale=IN
  const data = await (await fetch(url)).json();
  return data;
});

export const whereToWatch = cache(async () => {
  const maxPages = 22;
  const content = [];

  for (var i = 1; i <= maxPages; i++) {
    const data = await discoverTv(i);
    content.push(...data.results);
  }

  const ids = content.map((item: any) => item.id);
  const promises = ids.map((id: any) => watchProvider(id));
  const watchProvidersByCountry = await Promise.all(promises);
  let withProvider = content
    .map((item: any) => {
      const matchedProvider = watchProvidersByCountry.find(
        (provider) => provider.id === item.id
      );

      const flatrate =
        matchedProvider && matchedProvider.results && matchedProvider.results.IN
          ? matchedProvider.results.IN.flatrate
          : null;
      if (flatrate !== null && flatrate !== undefined) {
        return {
          ...item,
          providers:
            flatrate !== undefined && flatrate !== null
              ? flatrate.map((item: any) => item.provider_name)
              : null,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  return withProvider;
});

export const categorizeData = async () => {
  const data = await whereToWatch();
  // const categorize = data.reduce((result, item) => {

  //   const itemGroup = group.includes(item.providers[0])
  //     ? item.providers[0].toLowerCase().trim()
  //     : group[0];
  //   if (!result[itemGroup]) {
  //     result[itemGroup] = [];
  //     console.log(result);
  //   }
  //   result[itemGroup].push(item);
  //   return result;
  // });
  const categorize = data.reduce((result, item) => {
    const group = [
      "Netflix",
      "Amazon Prime Video",
      "Jio Cinema",
      "Hotstar",
      "Voot",
      "Zee5",
      "Sony Liv",
    ];
    if (Array.isArray(item.providers) && item.providers.length > 0) {
      // Iterate through all provider names in the 'providers' array
      for (const provider of item.providers) {
        const itemGroup = group.includes(provider) ? provider : group[0];

        if (!result[itemGroup]) {
          result[itemGroup] = [];
        }
        result[itemGroup].push(item);
      }
    } else {
      // Handle cases where 'providers' array is empty or not an array
      const itemGroup = group[0]; // Assign to the default category
      if (!result[itemGroup]) {
        result[itemGroup] = [];
      }
      result[itemGroup].push(item);
    }
    return result;
  }, {});

  return categorize;
};
