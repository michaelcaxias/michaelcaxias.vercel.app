import { useRouteError } from 'react-router-dom';
import { ErrorRouter } from './types';
import NotFoundPage from './NotFoundPage';
import InternalErrorPage from './InternalErrorPage';

type Pages = {
  [key: number]: React.ReactNode;
};

const pages: Pages = {
  404: <NotFoundPage />,
  500: <InternalErrorPage />,
};

export default function ErrorPageHandler() {
  const error = useRouteError() as ErrorRouter;
  console.error(error);

  const currentPage = pages[error.status]

  return <div id="error-page">{currentPage || <InternalErrorPage />}</div>;
}
