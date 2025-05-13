import { lazy } from 'react';

export const MainPage = lazy(() => import('~app/pages/main-page'));
export const PostsPage = lazy(() => import('~app/pages/posts-page'));
export const UseStatePage = lazy(() => import('~app/pages/use-state-page'));
export const SignUpPage = lazy(() => import('~app/pages/sign-up-page'));
export const SignalsPage = lazy(() => import('~app/pages/signals-page'));
export const AsyncRacePage = lazy(() => import('~app/pages/async-race-page'));
export const ShadcnPage = lazy(() => import('~app/pages/shadcn-page'));
