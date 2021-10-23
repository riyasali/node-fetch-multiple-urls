import fetch from 'node-fetch';
import validUrl from 'valid-url';

const checkResponse = async (res) => {
  if (res.ok) {
    const { url, status } = res;
    return Promise.resolve(
       await res.json()
    );
  }
  else {
    return Promise.reject(new Error(JSON.stringify({
      status: res.status,
      statusText: res.statusText,
      url: res.url
    })));
  }
};

export const fetchResources = (urls) => {
  if (!Array.isArray(urls)) {
    return new Array(Promise.reject(new Error('Expecting array of urls', urls)));
  }
  if (!urls.length > 0) {
    return new Array(Promise.reject(new Error('Input URLs array should not be empty', urls)));
  }
  return urls.map(url => {
    if (!validUrl.isUri(url)) {
      return new Array(Promise.reject(new Error('Invalid URL', url)));
    }

    return fetch(url)
      .then(checkResponse)
      .catch(err => {
        return err.message;
      })
  });
};