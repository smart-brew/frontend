import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import { SystemData } from '../types/SystemData';
import {
  allRecipes,
  dataEndpoint,
  singleRecipe,
  url,
  urlWithParams,
} from './endpoints';

export const getBrewStatus = (): Promise<SystemData> => {
  return fetch(url(dataEndpoint))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const getRecipes = (): Promise<RecipeSimple[]> => {
  return fetch(url(allRecipes))
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getRecipe = (id: number): Promise<RecipeType> => {
  return fetch(urlWithParams(singleRecipe, { id }))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
