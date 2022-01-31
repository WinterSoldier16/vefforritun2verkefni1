import { parseNumbersFromArray } from "../lib/parser";
import { fileReader } from "../lib/filereader";
import { calculate } from "../lib/calculate";

function main(filename) {
    var arr = fileReader(filename);
    arr = parseNumbersFromArray(arr);
    const results = calculate(arr);

    
}