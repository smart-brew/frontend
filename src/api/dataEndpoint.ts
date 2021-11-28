import { SystemData } from '../types/SystemData';
import { dataEndpoint } from './endpoints';
import { url } from './helpers';

export const getBrewStatus = (): Promise<SystemData> => {
  return fetch(url(dataEndpoint))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
