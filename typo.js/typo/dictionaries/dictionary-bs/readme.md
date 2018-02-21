# dictionary-bs

Bosnian spelling dictionary in UTF-8.

Useful with [hunspell][hunspell] ([node bindings][nodehun]), Open Office, LibreOffice, FireFox and Thunderbird, or [place them in`~/Library/Spelling`][osx] on OS X.

## Installation

[npm][npm]:

```bash
npm install dictionary-bs
```

## Usage

```js
var bs = require('dictionary-bs');

bs(function (err, result) {
    if (err) throw err;

    console.log(result);
    /*
     * Yields:
     * { dic: <Buffer>,
     *   aff: <Buffer> }
     */
});
```

Where `dic` is a buffer for the dictionary file at `index.dic` (in UTF-8), and
`aff` is a buffer for the affix file at `index.aff` (in UTF-8).

Or directly load the files, using something like:

```js
var path = require('path');
var base = require.resolve('dictionary-bs');

// NEVER USE `readFileSync` IN PRODUCTION.
fs.readFileSync(path.join(base, 'index.dic'), 'utf-8');
fs.readFileSync(path.join(base, 'index.aff'), 'utf-8');
```

## License

Dictionary and affix file: GPL-3.0, rest MIT ©
