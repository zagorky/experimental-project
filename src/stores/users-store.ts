import { create } from 'zustand';
import { UserFormDataType, UserType } from '~types/types.ts';
import { z } from 'zod';
import { UserFormData } from '~types/schemas.ts';

interface UserStoreType {
  users: Map<string, UserType>;
  addUser: (user: UserType) => void;
  error: z.ZodError<UserFormDataType> | null;
}

export const useUsersStore = create<UserStoreType>((set) => ({
  users: new Map(),
  error: null,
  addUser: (userData) => {
    const resul = UserFormData.safeParse(userData);

    if (resul.error) {
      set({ error: resul.error });
      return;
    }

    set((state) => {
      const id = crypto.randomUUID();
      const newUsers = new Map(state.users);
      newUsers.set(id, userData);
      return { users: newUsers, error: null };
    });
  },
}));
