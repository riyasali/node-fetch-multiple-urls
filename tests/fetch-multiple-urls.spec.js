import { fetchMultipleUrls } from '../index.js';
import { expect } from 'chai';
import { gbpHkd } from './gbp-hkd.js';
import { gbpUsd } from './gbp-usd.js';

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

describe('Test Request Multiple URLs', () => {
  it('Should handle API error', async () => {

    const invalidResourceUrl = 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-inr.json';
    const res = await fetchMultipleUrls([invalidResourceUrl]);
    const err = JSON.parse(res);
    expect(err.status).to.equal(403);
    expect(err.url).equal(invalidResourceUrl);
    expect(err.statusText).to.equal('Forbidden');
  });

  it('should return error when url is incorrect', async () => {
    try {
      await fetchMultipleUrls([...urls, 'https://dummyurl.com']);
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }
  });
  it('should return error when input an empty array', async () => {
    try {
      await fetchMultipleUrls([]);
    } catch (e) {
      expect(e).to.be.an.instanceOf(Error);
    }
  });
  it(' Response should be equal to combined API response', async () => {
    const res = await fetchMultipleUrls(urls);
    expect(res).to.deep.equal([gbpHkd, gbpUsd]);
  });
});
