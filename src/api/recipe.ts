import { RecipeApiUpload } from '../types/RecipeData/Recipe';
import RecipeType, { RecipeSimple } from '../types/RecipeData/RecipeType';
import { apiClient } from './client';
import { IdReturn } from './helpers';

export const getRecipes = (): Promise<RecipeSimple[]> => {
  return apiClient('GET /api/recipe')
    .then((recipes: RecipeSimple[] | null) => {
      if (recipes == null) return [];

      const sortedRecipes = [
        ...recipes
          .filter((recipe) => recipe.locked)
          .sort((a, b) => a.name.localeCompare(b.name)),
        ...recipes
          .filter((recipe) => !recipe.locked)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ];

      return sortedRecipes;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getRecipe = (id: number): Promise<RecipeType | null> => {
  return apiClient('GET /api/recipe/:id', { id });
};

export const createRecipe = async (
  recipe: RecipeApiUpload
): Promise<IdReturn | null> => {
  return apiClient('PUT /api/recipe', {}, recipe);
};

export const editRecipe = async (
  recipe: RecipeApiUpload,
  recipeId: number
): Promise<IdReturn | null> => {
  return apiClient('PUT /api/recipe/:id/edit', { id: recipeId }, recipe);
};

export const loadRecipe = async (
  recipeId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/recipe/:id/load', { id: recipeId });
};

export const deleteRecipe = async (
  recipeId: number
): Promise<IdReturn | null> => {
  return apiClient('POST /api/recipe/:id/delete', { id: recipeId });
};
