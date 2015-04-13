#list-files

> Finds all files in a directory and passes them into an array.
> Can specify name of sub-directory and match a prefix.

## Install

```
npm install list-files
```

## Usage

```js
var find = require('list-files');

find(function(result) {
    console.log(result);
}, {
    dir: 'dirname',
    name: 'js'
});

//=> './dirname/a.js'
//=> './dirname/b.js'
