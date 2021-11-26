export const dataEndpoint = '/api/data';
export const shutdown = '/api/shutdown';
export const recipeData = 'api/recipe';

export const backendUrl = process.env.REACT_APP_API_URL;
export const url = (endpoint: string): string => `${backendUrl}${endpoint}`;
