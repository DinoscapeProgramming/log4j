const log = require('./log4j.js');
const settings = {
  first: "test",
  second: "package",
  third: "nice"
};

log("Hey {}, what's {}? Welcome to {}. Have {}!", ["guys", "up", "log4j", "fun"])

log("Hey, this is a {}. This {} is {}!", [settings.first, settings.second, settings.third])
