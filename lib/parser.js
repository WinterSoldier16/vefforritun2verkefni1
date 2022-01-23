Globalize = require("globalize");
Globalize.load(
    require("cldr-data/supplemental/likelySubtags"),
    require("cldr-data/main/de/numbers"),
    require("cldr-data/supplemental/numberingSystems")
);
Globalize.locale("de");
var parser = Globalize.numberParser();