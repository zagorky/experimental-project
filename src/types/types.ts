import { Signal } from '@preact/signals-react';
import { z } from 'zod';
import { User, UserFormData } from '~types/schemas.ts';

export interface SignalFormDataType {
  signal: Signal<UserType>;
}

export type UserType = z.infer<typeof User>;

export type UserFormDataType = z.infer<typeof UserFormData>;
