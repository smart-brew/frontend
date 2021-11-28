import { SystemData } from '../types/SystemData';
import { dataEndpoint, url } from './endpoints';

export const getBrewStatus = (): Promise<SystemData> => {
  return fetch(url(dataEndpoint))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
