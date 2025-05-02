import { z } from 'zod';

export const User = z.object({
  name: z.string(),
  email: z.string(),
  id: z.string(),
});

const MIN_LENGTH = 3;
const MAX_LENGTH = 15;

export const UserFormData = z.object({
  name: z
    .string()
    .min(MIN_LENGTH, { message: `Name must be at least ${MIN_LENGTH.toString()} symbols` })
    .max(MAX_LENGTH, { message: `Name must be at least less than ${MAX_LENGTH.toString()} symbols` }),
  email: z.string().email(),
  id: z.string(),
});

export const Posts = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const Car = z.object({
  name: z.string(),
  color: z.string(),
  id: z.number(),
});

export const AddCarFormData = z.object({
  name: z
    .string()
    .min(MIN_LENGTH, { message: `Name must be at least ${MIN_LENGTH.toString()} symbols` })
    .max(MAX_LENGTH, { message: `Name must be at least less than ${MAX_LENGTH.toString()} symbols` }),
  color: z.string(),
  id: z.number(),
});
