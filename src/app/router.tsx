import { createBrowserRouter } from 'react-router';
import { Layout } from '~components/layouts/layout.tsx';
import { pathes } from '~config/routes-config.ts';
import { Loader } from '~components/ui/loader.tsx';

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: pathes.main,
        HydrateFallback: Loader,
        async lazy() {
          const { MainPage } = await import('./pages/main-page.tsx');

          return {
            element: <MainPage />,
          };
        },
      },
      {
        path: pathes.state,
        HydrateFallback: Loader,
        async lazy() {
          const { UseStatePage } = await import('./pages/use-state.page.tsx');

          return {
            element: <UseStatePage />,
          };
        },
      },
      {
        path: pathes.signals,
        HydrateFallback: Loader,
        async lazy() {
          const { SignalsPage } = await import('./pages/signals-page.tsx');

          return {
            element: <SignalsPage />,
          };
        },
      },
      {
        path: pathes.shadcn,
        HydrateFallback: Loader,
        async lazy() {
          const { ShadcnPage } = await import('./pages/shadcn-page.tsx');

          return {
            element: <ShadcnPage />,
          };
        },
      },
      {
        path: pathes.posts,
        HydrateFallback: Loader,
        async lazy() {
          const { PostsPage } = await import('./pages/posts-page.tsx');

          return {
            element: <PostsPage />,
          };
        },
      },
      {
        path: pathes['async-race'],
        HydrateFallback: Loader,
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
