# node-fetch-multiple-urls
Node JS module to fetch multiple urls and return response as promise object.

## Installation
```console
npm install node-fetch-multiple-urls
```
## Run tests
```
npm test
```
## Usage
``` javascript
import { fetchMultipleUrls } from './index.js';

const urls = [
  'https://pokeapi.co/api/v2/pokemon?limit=4&offset=0',
  'https://pokeapi.co/api/v2/pokemon/1',
];

fetchMultipleUrls(urls)
  .then(content => console.log(`Content => ${JSON.stringify(content)}`))
  .catch(err => console.log(`Error while requesting multiple urls: ${err.message}`));

```

## Dependencies
```
node-fetch

```