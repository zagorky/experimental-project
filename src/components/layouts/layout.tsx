import { Outlet, useNavigation } from 'react-router';
import { Header } from '~components/header.tsx';
import { Loader } from '~components/ui/loader.tsx';

export const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === 'loading' && <Loader />}
      <Header />
      <Outlet />
    </>
  );
};
