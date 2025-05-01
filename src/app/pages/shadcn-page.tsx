import { ShadcnForm } from '~components/shadcn-form.tsx';
import { UserRenderer } from '~components/user-renderer.tsx';
import { useUsersStore } from '~stores/users-store.ts';

export const ShadcnPage = () => {
  const users = useUsersStore((state) => state.users);

  return (
    <>
      <ShadcnForm></ShadcnForm>
      <UserRenderer users={users} />
    </>
  );
};
