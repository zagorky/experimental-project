export interface ConstructorOf<T> {
  new (...args: never[]): T;
  prototype: T;
}

export function assertIsNonNullable<T>(value: unknown, ...infos: unknown[]): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`Nullish assertion Error: "${String(value)}"; ${infos.join(' ')}`);
  }
}

export function isInstanceOf<T>(elemType: ConstructorOf<T>, value: unknown): value is T {
  return value instanceof elemType;
}

export function hasSome<T>(value: unknown): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export const withDataTestId = (testID: string) => {
  return {
    'data-testid': testID,
  };
};
