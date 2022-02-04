import { readFile } from 'fs/promises';

export async function fileReader(fileName) {
  let numbers = '';
  try {
    numbers = await readFile(`./data/${fileName}.txt`);
  } catch (err) {
    console.error('error', err);
    throw Error('error');
  }
  const array = numbers.toString().split('\n');
  return array;
}
// readFileAsync(fileName).catch((e) => {
//     console.error(e);
// });
