import { url as makeUrl } from './endpoints';

export const put = (url: string, body: unknown): Promise<any> => {
  return fetch(makeUrl(url), {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
