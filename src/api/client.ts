import { setRecoil } from 'recoil-nexus';
import { popupState } from '../store/store';
import { Endpoints } from './endpoints';
import { urlWithParams } from './helpers';

export function get<Endpoint extends keyof Endpoints>(
  url: Endpoint,
  params?: {
    [key: string]: number;
  }
): Promise<Endpoints[Endpoint] | null> {
  const api = url.split(' ');

  return fetch(urlWithParams(api[1], params)).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return null;
  });
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
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return null;
  });
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
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return null;
  });
};

function errorHandler({ message }: Error): null {
  if (message === 'Failed to fetch') {
    setRecoil(popupState, {
      title: 'Connection error',
      description:
        "Couldn't connect to the server. Please wait a few seconds and then try again.",
      buttonType: 'secondary',
      buttonText: 'Retry',
      onConfirm: () => {
        window.location.href = '/';
      },
    });
  }

  return null;
}

export function apiClient<Endpoint extends keyof Endpoints>(
  url: Endpoint,
  params?: {
    [key: string]: number;
  },
  body?: unknown
): Promise<Endpoints[Endpoint] | null> {
  const [method] = url.split(' ');

  if (method === 'GET') {
    return get(url, params).catch(errorHandler);
  }
  if (method === 'PUT') {
    return put(url, body, params).catch(errorHandler);
  }
  if (method === 'POST') {
    return post(url, params, body).catch(errorHandler);
  }

  return Promise.resolve(null);
}
