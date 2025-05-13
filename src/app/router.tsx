import { createBrowserRouter } from 'react-router';
import { Layout } from '~components/layouts/layout.tsx';
import { routes } from '~config/routes-config.ts';
import { AsyncRacePage, MainPage, ShadcnPage, SignalsPage, SignUpPage, UseStatePage } from '~app/lazy.tsx';

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.main.path,
        element: <MainPage />,
      },
      {
        path: routes.state.path,
        element: <UseStatePage />,
      },
      {
        path: routes.signals.path,
        element: <SignalsPage />,
      },
      {
        path: routes.shadcn.path,
        element: <ShadcnPage />,
      },
      // {
      //   path: routes.posts.path,
      //   element: <PostsPage />,
      // },
      {
        path: routes.async.path,
        element: <AsyncRacePage />,
      },
      {
        path: routes.signup.path,
        element: <SignUpPage />,
      },
    ],
  },
]);
