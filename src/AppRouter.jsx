import { useRoutes } from 'react-router-dom';
import App from './App';
import TestPageRenzo from './pages/TestPageRenzo/TestPageRenzo';

function AppRouter() {
  return useRoutes([
    {
      element: <App />,
      path: '/',
    },
    {
      element: <TestPageRenzo />,
      path: '/testpagerenzo',
    },
  ]);
}
export default AppRouter;
