import { create } from 'zustand';
import { UserFormDataType, UserType } from '~types/types.ts';
import { z } from 'zod';
import { UserFormData } from '~types/schemas.ts';

interface UserStoreType {
  users: Set<UserType>;
  addUser: (user: UserType) => void;
  error: z.ZodError<UserFormDataType> | null;
}

export const useUsersStore = create<UserStoreType>((set) => ({
  users: new Set(),
  error: null,
  addUser: (userData) => {
    const resul = UserFormData.safeParse(userData);

    if (resul.error) {
      set({ error: resul.error });
      return;
    }

    set((state) => {
      const newUsers = new Set(state.users);
      newUsers.add(userData);
      return { users: newUsers, error: null };
    });
  },
}));
