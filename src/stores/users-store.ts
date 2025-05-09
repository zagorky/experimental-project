import { create } from 'zustand';
import { UserFormDataType, UserType } from '~types/types.ts';
import { z } from 'zod';
import { UserFormData } from '~types/schemas.ts';
import { devtools } from 'zustand/middleware';

interface UserStoreType {
  users: Map<string, UserType>;
  addUser: (user: UserType) => void;
  error: z.ZodError<UserFormDataType> | null;
  isLoggedIn: boolean;
}

export const useUsersStore = create<UserStoreType>()(
  devtools(
    (set) => ({
      isLoggedIn: false,
      users: new Map(),
      error: null,
      addUser: (userData) => {
        const result = UserFormData.safeParse(userData);
        console.log(result);
        if (!result.success) {
          set({ error: result.error });
          return;
        }

        set((state) => {
          const newUsers = new Map(state.users);
          const id = crypto.randomUUID();
          newUsers.set(id, { ...userData, id });
          return { users: newUsers, error: null };
        });
      },
    }),
    { name: 'UserStore' },
  ),
);
