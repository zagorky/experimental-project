export const fetcher = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  const res = await fetch(input, init);
  const data: unknown = await res.json();
  return data as T;
};
