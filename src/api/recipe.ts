import { RecipeApiUpload } from '../types/RecipeData/Recipe';
import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import { post, put } from './client';
import {
  allRecipes,
  createRecipeUrl,
  loadRecipeUrl,
  singleRecipe,
  deleteRecipeUrl,
} from './endpoints';
import { IdReturn, url, urlWithParams } from './helpers';

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

export const loadRecipe = async (recipeId: number): Promise<IdReturn> => {
  return post(loadRecipeUrl, { id: recipeId });
};

export const deleteRecipe = async (recipeId: number): Promise<IdReturn> => {
  return post(deleteRecipeUrl, { id: recipeId });
};
