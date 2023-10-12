import Home from '@pages/Home';
import Me from '@pages/Me';
import 'normalize.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/me',
    element: <Me />
  }
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
