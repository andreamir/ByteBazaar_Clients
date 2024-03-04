import { useRoutes } from 'react-router-dom';
import App from './App';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import CarouselDemo from './pages/CarouselDemo/CarouselDemo.jsx'
import TestPageRenzo from './pages/TestPageRenzo/TestPageRenzo'
import GameCardDemo from './pages/GameCardDemo/GameCardDemo.jsx'
import TestPageMarc from './pages/TestPageMarc/TestPageMarc.jsx'
import Account from './pages/Account/Account.jsx'
import DreasPage from './pages/DreasPage/DreasPage.jsx';

function AppRouter(){
  return useRoutes([
    {
      element: <App />,
      path: '/',
    },
    {
      element: <TestPageRenzo />,
      path: '/testpagerenzo',
    },
    {
      element: <ProductDetail />,
      path: '/product/:id'
    },
    {
      element: <CarouselDemo />,
      path: '/carouselDemo'
    },
    {
      element: <GameCardDemo />,
      path: '/gameCardDemo'
    },
    {
      element: <TestPageMarc />,
      path: '/testpagemarc',
    },
    {
      element: <Account />,
      path: '/account',
    },
    {
      element: <DreasPage/>,
      path: '/drea'
    },
  ]);
}

export default AppRouter