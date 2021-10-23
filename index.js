import {fetchResources} from './lib/fetch-multiple-urls.js';

export const fetchMultipleUrls = (urls) => Promise.all(fetchResources(urls));

