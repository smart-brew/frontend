export const dataEndpoint = '/api/data';
export const shutdown = '/api/shutdown';
export const allRecipes = '/api/recipe';
export const singleRecipe = '/api/recipe/:id';
export const createRecipeUrl = '/api/recipe';
export const loadRecipeUrl = '/api/recipe/:id/load';
export const deleteRecipeUrl = '/api/recipe/:id/delete';
export const startBrew = '/api/brew/0/start';

export const pauseBrew = '/api/brew/:id/pause';
export const abortBrew = '/api/brew/:id/abort';
export const resumeBrew = '/api/brew/:id/resume';

export const confirmInstructionUrl =
  '/api/brew/:brewId/instruction/:instructionId/done';

export const supportedFunctions = '/api/function';
