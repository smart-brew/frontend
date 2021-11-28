export interface IdReturn {
  id: number;
}

export const backendUrl = process.env.REACT_APP_API_URL;
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
