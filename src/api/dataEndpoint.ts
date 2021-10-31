import { ModuleData } from '../types/Data';

export const getBrewStatus = (): Promise<ModuleData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/data`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
