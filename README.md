# Log for JavaScript (log4j)
A simple log package for JavaScript

## Documentation
### Require the package
```js
const log = require('./log4j.js')
```

### Logging a simple message
```js
log("Hey Guys!")
```
#### Result
```
Hey Guys
```

### Using elements
```js
log("Hey {}! What's up {}", ["Guys", "lol"])
```
#### Result
```
Hey Guys! What's up lol
```

## Example
```js
const log = require('./log4j.js');
const settings = {
  first: "test",
  second: "package",
  third: "nice"
};

log("Hey {}, what's {}. Welcome to {}. Have {}!", ["guys", "up", "log4j", "fun"])

log("Hey, this is a {}. This {} is {}!", [settings.first, settings.second, settings.third])
```

## Note
THIS PACKAGE IS DEPRECATED! PLEASE USE THIS:
```js
const settings = {
  first: "Guys",
  second: "lol"
}
console.log(`Hey ${settings.first}! What's up ${settings.second}`)
```
