import { SystemData } from '../types/SystemData';
import { dataEndpoint } from './endpoints';

export const getBrewStatus = (): Promise<SystemData> => {
  return fetch(`${process.env.REACT_APP_API_URL}${dataEndpoint}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
