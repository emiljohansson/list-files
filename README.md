#list-files [![Build Status](https://travis-ci.org/emiljohansson/list-files.svg?branch=master)](https://travis-ci.org/emiljohansson/list-files)

> Finds all files in a directory and passes them into an array.
> Can specify the name of sub-directory and match a file extension.

## Install

```
npm install list-files
```

## Usage

```js
var find = require('list-files');

find(function(result) {
    console.log(result);
    //=> './dirname/a.js'
    //=> './dirname/b.js'
}, {
    dir: 'dirname',
    name: 'js'
});
```

## API
### find(callback, [argv])
#### callback

Type: `function`

Called once the search is complete.

#### argv

Type: `object`

Optional options. Possible options 'dir' and 'name'.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
