import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'normalize.css';

import ErrorPageHandler from '@/pages/error_page';
import Home from '@/pages/home';
import Me from '@/pages/me';
import Projects from '@/pages/projects/';
import Blog from '@/pages/blog/';

import AppWrapper from '@/AppWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/me',
        element: <Me />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
    errorElement: <ErrorPageHandler />,
  },
  {
    path: '/me',
    element: <Me />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
