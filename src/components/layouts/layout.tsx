import { Outlet } from 'react-router';
import { Header } from '~components/header.tsx';
import { Suspense } from 'react';
import { Loader } from '~components/ui/loader.tsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
