Globalize = require("globalize");
Globalize.load(
    require("cldr-data/supplemental/likelySubtags"),
    require("cldr-data/main/de/numbers"),
    require("cldr-data/supplemental/numberingSystems")
);
Globalize.locale("de");
const parser = Globalize.numberParser();

function isCorrupt(string) {
    if (string === "\n" || /\s+$/.test(string) || string === "") {
        return true;
    } else {
        return false;
    }
}

function cleanUpNonNumbers(arr) {
    arr =  arr.filter(element => !isCorrupt(element));
    arr = arr.map(element => element.replaceAll(/.(?=\d{3})/g, ""));
    arr = arr.map(element => element.replaceAll(",", "."));
    arr = arr.filter(element => !isNaN(Number (element)));
    return arr;
}

export function parseNumbersFromArray(arr) {
    arr = cleanUpNonNumbers(arr);
    arr.map(number => Number (number));
    
    return numbers;
}