import { useRoutes } from 'react-router-dom';
import App from './App';
import DreasPage from './pages/DreasPage/DreasPage.jsx';

function AppRouter(){
  return useRoutes([
      {
        element: <App/>,
        path: '/'
      },
      {
        element: <DreasPage/>,
        path: '/drea'
      },
    ])
  }
  export default AppRouter;