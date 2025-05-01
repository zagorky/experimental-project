import './App.css';
import { ShadcnForm } from '~components/shadcn-form.tsx';
import { UserRenderer } from '~components/user-renderer.tsx';
import { useUsersStore } from '~stores/users-store.ts';

function App() {
  const users = useUsersStore((state) => state.users);
  return (
    <section>
      <ShadcnForm />
      <UserRenderer users={users} />
    </section>
  );
}

export default App;
