import { create } from 'zustand/react';
import { UserFormDataType, UserType } from '~types/types.ts';
import { z } from 'zod';
import { UserFormData } from '~types/schemas.ts';
import { useId } from 'react';

interface UserStoreType {
  users: Map<string, UserType>;
  addUser: (user: UserType) => void;
  error: z.ZodError<UserFormDataType> | null;
}

export const useUsersStore = create<UserStoreType>((set) => ({
  users: new Map(),
  error: null,
  addUser: (userData) => {
    //валидируем через схему: либо дата { success: true; data: 'billie' }, либо ошибка { success: false; error: ZodError }
    const resul = UserFormData.safeParse(userData);

    if (resul.error) {
      set({ error: resul.error });
      return;
    }

    set((state) => {
      const id = useId();
      state.users.set(id, userData);
      return { users: state.users, error: null };
    });
  },
}));
