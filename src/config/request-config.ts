import { RequestConfigType } from '~types/types.ts';

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
