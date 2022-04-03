import { Endpoints } from './endpoints';
import { urlWithParams } from './helpers';

export function get<Endpoint extends keyof Endpoints>(
  url: Endpoint,
  params?: {
    [key: string]: number;
  }
): Promise<Endpoints[Endpoint] | null> {
  const api = url.split(' ');

  return fetch(urlWithParams(api[1], params))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return null;
    })
    .catch((error) => console.log(error));
}

export const put = <Endpoint extends keyof Endpoints>(
  url: Endpoint,
  body?: unknown,
  params?: {
    [key: string]: number;
  }
): Promise<Endpoints[Endpoint] | null> => {
  const api = url.split(' ');

  return fetch(urlWithParams(api[1], params), {
    body: JSON.stringify(body || {}),
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return null;
    })
    .catch((error) => console.log(error));
};

export const post = <Endpoint extends keyof Endpoints>(
  url: Endpoint,
  params?: {
    [key: string]: number;
  },
  body?: unknown
): Promise<Endpoints[Endpoint] | null> => {
  const api = url.split(' ');

  return fetch(urlWithParams(api[1], params), {
    body: JSON.stringify(body || {}),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return null;
    })
    .catch((error) => console.log(error));
};

export function apiClient<Endpoint extends keyof Endpoints>(
  url: Endpoint,
  params?: {
    [key: string]: number;
  },
  body?: unknown
): Promise<Endpoints[Endpoint] | null> {
  const [method] = url.split(' ');

  if (method === 'GET') {
    return get(url, params);
  }
  if (method === 'PUT') {
    return put(url, body, params);
  }
  if (method === 'POST') {
    return post(url, params, body);
  }

  return Promise.resolve(null);
}
