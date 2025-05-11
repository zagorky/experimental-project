import React, { JSX } from 'react';
import { useUsersStore } from '~stores/users-store.ts';
import { Navigate, useNavigation } from 'react-router';
import { PageSkeleton } from '~components/page-skeleton.tsx';
import { pathes } from '~config/routes-config.ts';

interface WrapperProps {
  children: JSX.Element;
}

export const LoginWrapper: React.FC<WrapperProps> = ({ children }) => {
  const isLoggedIn = useUsersStore((state) => state.isLoggedIn);
  const navigation = useNavigation();

  return (
    <>
      {!isLoggedIn ? children : <Navigate to={pathes.main} replace />}
      {navigation.state === 'idle' ? children : <PageSkeleton />}
    </>
  );
};
