import { createBrowserRouter } from 'react-router';
import { Layout } from '~components/layouts/layout.tsx';
import { pathes } from '~config/routes-config.ts';
import { PageSkeleton } from '~components/page-skeleton.tsx';

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: pathes.main,
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { MainPage } = await import('./pages/main-page.tsx');
          return {
            element: <MainPage />,
          };
        },
      },
      {
        path: pathes.state,
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { UseStatePage } = await import('./pages/use-state.page.tsx');

          return {
            element: <UseStatePage />,
          };
        },
      },
      {
        path: pathes.signals,
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { SignalsPage } = await import('./pages/signals-page.tsx');

          return {
            element: <SignalsPage />,
          };
        },
      },
      {
        path: pathes.shadcn,
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { ShadcnPage } = await import('./pages/shadcn-page.tsx');

          return {
            element: <ShadcnPage />,
          };
        },
      },
      {
        path: pathes.posts,
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { PostsPage } = await import('./pages/posts-page.tsx');

          return {
            element: <PostsPage />,
          };
        },
      },
      {
        path: pathes['async-race'],
        HydrateFallback: PageSkeleton,

        async lazy() {
          const { AsyncRacePage } = await import('./pages/async-race-page.tsx');

          return {
            element: <AsyncRacePage />,
          };
        },
      },
    ],
  },
]);
