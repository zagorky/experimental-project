import { Outlet } from 'react-router';
import { Header } from '~components/header.tsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
