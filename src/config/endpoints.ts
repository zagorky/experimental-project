import { RequestConfigType } from '~types/types.ts';

export const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

export const ASYNC_RACE_GARAGE_ENDPOINT = 'http://127.0.0.1:3000/garage';

export const requestConfig: RequestConfigType = {
  get: {
    method: 'GET',
  },
  post: (data: unknown) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  patch: (data: unknown) => ({
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  delete: {
    method: 'DELETE',
  },
  put: (data: unknown) => ({
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
};
