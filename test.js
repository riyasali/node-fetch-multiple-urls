import { fetchMultipleUrls } from './index.js';

const urls = [
  'https://pokeapi.co/api/v2/pokemon?limit=4&offset=0',
  'https://pokeapi.co/api/v2/pokemon/1',
];

fetchMultipleUrls(urls)
  .then(content => console.log(content))
  .catch(err => console.log(`Error while requesting multiple urls: ${err.message}`));