import City from '@/classes/city';

const writeToCache = (cityName: string, data: City) => {
  localStorage.setItem(cityName, JSON.stringify({
    city: data,
    lastUpdate: new Date(),
  }));
};

const readFromCache = (cityName: string): { city: City, lastUpdate: Date } | undefined => {
  const data = localStorage.getItem(cityName);
  if (data) {
    return JSON.parse(data);
  }
  return undefined;
};

export { readFromCache, writeToCache };
