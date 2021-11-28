import { post } from './client';
import { startBrew } from './endpoints';
import { IdReturn } from './helpers';

export const startBrewing = async (recipeId: number): Promise<IdReturn> => {
  return post(startBrew, {}, { recipeId });
};
