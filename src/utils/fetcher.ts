// export const fetcher = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
//   const res = await fetch(input, init);
//   const data: unknown = await res.json();
//   return data as T;
// };

import { ZodType } from 'zod';

export async function fetcher<S>(schema: ZodType<S, any>, input: RequestInfo, init?: RequestInit): Promise<S> {
  const res = await fetch(input, init);
  const json: unknown = await res.json();
  return schema.parse(json);
}
