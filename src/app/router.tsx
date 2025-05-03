import { createBrowserRouter } from 'react-router';
import { Layout } from '~components/layouts/layout.tsx';
import { pathes } from '~config/routes-config.ts';

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: pathes.main,
        async lazy() {
          const { MainPage } = await import('./pages/main-page.tsx');

          return {
            element: <MainPage />,
          };
        },
      },
      {
        path: pathes.state,
        async lazy() {
          const { UseStatePage } = await import('./pages/use-state.page.tsx');

          return {
            element: <UseStatePage />,
          };
        },
      },
      {
        path: pathes.signals,
        async lazy() {
          const { SignalsPage } = await import('./pages/signals-page.tsx');

          return {
            element: <SignalsPage />,
          };
        },
      },
      {
        path: pathes.shadcn,
        async lazy() {
          const { ShadcnPage } = await import('./pages/shadcn-page.tsx');

          return {
            element: <ShadcnPage />,
          };
        },
      },
      {
        path: pathes.posts,
        async lazy() {
          const { PostsPage } = await import('./pages/posts-page.tsx');

          return {
            element: <PostsPage />,
          };
        },
      },
      {
        path: pathes['async-race'],
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
