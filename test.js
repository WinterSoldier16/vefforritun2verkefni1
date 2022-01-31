Globalize = require("globalize");
Globalize.load(
	require("cldr-data/supplemental/likelySubtags"),
	require("cldr-data/main/de/numbers"),
	require("cldr-data/supplemental/numberingSystems")
);
Globalize.locale("de");
//Globalize.load(require("cldr-data").entireSupplemental());
//Globalize.load(require("cldr-data").entireMainFor("en", "es"));
// console.log(Globalize.numberParser()("10.000,00"));
// console.log(Globalize.numberParser()("10.000,94"));
// console.log(Globalize.numberParser()("6.4e3"));
// console.log(Globalize.numberParser()("    583"));
// console.log(Number("    583"));


const arr = ["10", "1.000.000,5", "bla", "99", "9.000", "fail"]
const simpleNumbers = arr.filter(number => !isNaN(Number (number)));
var parsable = arr.filter(number => !isNaN(Globalize.numberParser()(number)));
console.log(parsable);
parsable = parsable.map(number => Globalize.numberParser()(number));
console.log(parsable);
var result = simpleNumbers.concat(parsable);
result = result.map(number => Number (number));
console.log(result);
console.log(Number ("9.000"));