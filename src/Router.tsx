import { createHashRouter } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard, Empty, NoMatch, Sample } from './pages';

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'sample',
        element: <Sample />,
      },
      {
        path: 'empty',
        element: <Empty />,
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);
