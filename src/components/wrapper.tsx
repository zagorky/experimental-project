import React, { JSX } from 'react';
import { useUsersStore } from '~stores/users-store.ts';
import { Navigate } from 'react-router';
import { routes } from '~config/routes-config.ts';

interface WrapperProps {
  children: JSX.Element;
}

export const LoginWrapper: React.FC<WrapperProps> = ({ children }) => {
  const isLoggedIn = useUsersStore((state) => state.isLoggedIn);

  return <>{!isLoggedIn ? children : <Navigate to={routes.main.path} replace />}</>;
};
