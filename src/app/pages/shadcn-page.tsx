import { ShadcnForm } from '~components/shadcn-form.tsx';
import { UserRenderer } from '~components/user-renderer.tsx';
import { useUsersStore } from '~stores/users-store.ts';

const ShadcnPage = () => {
  const users = useUsersStore((state) => state.users);

  return (
    <>
      <ShadcnForm />
      <UserRenderer users={users} />
    </>
  );
};

export default ShadcnPage;
