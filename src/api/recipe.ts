import { RecipeApiUpload } from '../types/RecipeData/Recipe';
import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import { put } from './client';
import {
  allRecipes,
  createRecipeUrl,
  singleRecipe,
  url,
  urlWithParams,
} from './endpoints';

export interface IdReturn {
  id: number;
}

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

export const createRecipe = async (
  recipe: RecipeApiUpload
): Promise<IdReturn> => {
  return put(createRecipeUrl, recipe);
};
