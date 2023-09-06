// import { getPlaiceholder } from "plaiceholder";
// export async function getBase64(imageUrl: string) {
//   try {
//     const res = await fetch(imageUrl);
//     if (!res.ok) {
//       throw new Error("Failed to fetch");
//     }
//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     return base64;
//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack);
//   }
// }

// export default async function addBlurDataUrls(images: any) {
//   const base64Promises = images.map((item) => getBase64(item.file_path));
//   const base64Results = await Promise.all(base64Promises);
//   const photoWithBlur = images.map((item, i) => {
//     item.blurDataUrl = base64Results[i];
//     return item;
//   });
//   return photoWithBlur;
// }
