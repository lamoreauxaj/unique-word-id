# Unique Word ID

A simple plugin to generate human readable ids from concatenation of words.

## Examples

```javascript
const uniqueWordId = require("./src/index")

console.log(uniqueWordId({ exactly: 3, join: "-", maxLength: 10 }))
```
