export const dataEndpoint = '/api/data';
export const shutdown = '/api/shutdown';
export const allRecipes = '/api/recipe';
export const singleRecipe = '/api/recipe/:id';
export const createRecipeUrl = '/api/recipe';

export const backendUrl = process.env.REACT_APP_API_URL;
export const url = (endpoint: string): string => `${backendUrl}${endpoint}`;

export const urlWithParams = (
  endpoint: string,
  params: {
    [key: string]: number;
  }
): string => {
  let tmpEndpoint = endpoint;

  Object.keys(params).forEach((key) => {
    tmpEndpoint = tmpEndpoint.replace(`:${key}`, `${params[key]}`);
  });

  return `${backendUrl}${tmpEndpoint}`;
};
