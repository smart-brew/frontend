/* eslint-disable @typescript-eslint/no-explicit-any */

import { url as makeUrl, urlWithParams } from './helpers';

export const put = (url: string, body?: unknown): Promise<any> => {
  return fetch(makeUrl(url), {
    body: JSON.stringify(body || {}),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const post = (
  url: string,
  params?: {
    [key: string]: number;
  },
  body?: unknown
): Promise<any> => {
  return fetch(urlWithParams(url, params), {
    body: JSON.stringify(body || {}),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
