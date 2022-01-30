Globalize = require("globalize");
Globalize.load(
	require("cldr-data/supplemental/likelySubtags"),
	require("cldr-data/main/de/numbers"),
	require("cldr-data/supplemental/numberingSystems")
);
Globalize.locale("de");
//Globalize.load(require("cldr-data").entireSupplemental());
//Globalize.load(require("cldr-data").entireMainFor("en", "es"));
console.log(Globalize.numberParser()("10.000,00"));
console.log(Globalize.numberParser()("10.000,94"));
console.log(Globalize.numberParser()("6.4e3"));
console.log(Globalize.numberParser()("    583"));
console.log(Number("    583"));
