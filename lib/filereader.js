import { readFile } from 'fs';
import {util} from 'util';

const readFileAsync = util.promisify(readFile);

export async function fileReader(fileName) {
    const numbers = '';
    try { 
        numbers = await readFileAsync(`../data/${fileName}.txt`)
    } catch(err) {
        console.error('error', err);
    }
    numbers.toString().split('\n');
    return numbers;
}
fileReader().catch((e) => {
    console.error(e);
});



