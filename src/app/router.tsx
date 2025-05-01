import { createBrowserRouter } from 'react-router';
import { Layout } from '~components/layouts/layout.tsx';

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        async lazy() {
          const { MainPage } = await import('./pages/main-page.tsx');

          return {
            element: <MainPage />,
          };
        },
      },
      {
        path: '/state',
        async lazy() {
          const { UseStatePage } = await import('./pages/use-state.page.tsx');

          return {
            element: <UseStatePage />,
          };
        },
      },
      {
        path: '/signals',
        async lazy() {
          const { SignalsPage } = await import('./pages/signals-page.tsx');

          return {
            element: <SignalsPage />,
          };
        },
      },
      {
        path: '/shadcn',
        async lazy() {
          const { ShadcnPage } = await import('./pages/shadcn-page.tsx');

          return {
            element: <ShadcnPage />,
          };
        },
      },
    ],
  },
]);
