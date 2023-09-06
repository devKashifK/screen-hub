// export function getRandomIDs(arr: any, count: number) {
//   const randomIDs = [];
//   const arrCopy = [...arr]; // Create a copy of the array to avoid modifying the original

//   for (let i = 0; i < count; i++) {
//     if (arrCopy.length === 0) {
//       break; // Stop if there are no more items in the array
//     }

//     const randomIndex = Math.floor(Math.random() * arrCopy.length);
//     randomIDs.push(arrCopy.results.splice(randomIndex, 1)[0].id);
//   }

//   return randomIDs;
// }

export function randomIndex(result: any, count: number) {
  const randomIndex = Math.floor(Math.random() * result.length);
  const data = result.splice(randomIndex, count);
  return data;
}
