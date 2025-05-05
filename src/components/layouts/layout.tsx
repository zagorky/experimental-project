import { Outlet } from 'react-router';
import { Header } from '~components/header.tsx';
import { Suspense } from 'react';
import { PageSkeleton } from '~components/page-skeleton.tsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageSkeleton />}>
        <Outlet />
      </Suspense>
    </>
  );
};
