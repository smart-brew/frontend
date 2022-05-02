export interface IdReturn {
  id?: number;
  error?: string;
}

export const backendUrl = import.meta.env.VITE_API_URL;
export const url = (endpoint: string): string => `${backendUrl}${endpoint}`;

export const urlWithParams = (
  endpoint: string,
  params: {
    [key: string]: number;
  } = {}
): string => {
  let tmpEndpoint = endpoint;

  Object.keys(params).forEach((key) => {
    tmpEndpoint = tmpEndpoint.replace(`:${key}`, `${params[key]}`);
  });

  return `${backendUrl}${tmpEndpoint}`;
};
