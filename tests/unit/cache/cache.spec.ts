import { readFromCache, writeToCache } from '@/cache/cache';
import City from '@/classes/city';
import moment from 'moment';

describe('cache.ts', () => {
  afterAll(() => {
    localStorage.removeItem('joinville');
  });

  it('set a value in cache', () => {
    const updatedAt = moment(Date.now()).format('hh:mm:ss A');
    const city = new City('Joinville', 'BR', 29, 50, 50, updatedAt);

    writeToCache('joinville', city);

    const dataInCache = localStorage.getItem('joinville');

    expect(dataInCache !== undefined).toBeTruthy();

    if (dataInCache) {
      const cityInCache = JSON.parse(dataInCache).city;
      expect(cityInCache).toEqual(city);
    }
  });

  it('read a value from cache', () => {
    const cachedData = readFromCache('joinville');

    expect(cachedData?.city.name).toEqual('Joinville');
    expect(cachedData?.city.country).toEqual('BR');
  });
});
