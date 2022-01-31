Globalize = require("globalize");
Globalize.load(
    require("cldr-data/supplemental/likelySubtags"),
    require("cldr-data/main/de/numbers"),
    require("cldr-data/supplemental/numberingSystems")
);
Globalize.locale("de");
const parser = Globalize.numberParser();

function isCorrupt(string) {
    if (string === "\n" || string === " " || string === "") {
        return true;
    } else {
        return false;
    }
}

function cleanUp(arr) {
    const result =  arr.filter(element => !isCorrupt(element));
}

export function parseNumbersFromArray(arr) {
    arr = cleanUp(arr);
    // TODO REJECT GLOBALIZE EMBRACE replaceAll()
    const simpleNumbers = arr.filter(number => !isNaN(Number (number)));
    const parsable = arr.filter(number => !isNaN(parser(number)));
    const numbers = simpleNumbers.concat(parsable);
    numbers.map(number => Number (number));

    return numbers;
}