import { Signal } from '@preact/signals-react';
import { z } from 'zod';
import { AddCarFormData, Car, Posts, User, UserFormData } from '~types/schemas.ts';

export interface SignalFormDataType {
  signal: Signal<UserType>;
}

export type UserType = z.infer<typeof User>;

export type UserFormDataType = z.infer<typeof UserFormData>;

export type PostType = z.infer<typeof Posts>;

export interface RequestConfigType {
  get: RequestInit;
  post: (data: unknown) => RequestInit;
  patch: (data: unknown) => RequestInit;
  delete: RequestInit;
  put: (data: unknown) => RequestInit;
}

export type CarType = z.infer<typeof Car>;

export type AddCarFormDataType = z.infer<typeof AddCarFormData>;
