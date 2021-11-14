import { SystemData } from '../types/SystemData';

export const getBrewStatus = (): Promise<SystemData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/data`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
