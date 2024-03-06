import { useRoutes } from 'react-router-dom'
import App from './App'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import CarouselDemo from './pages/CarouselDemo/CarouselDemo.jsx'
import TestPageRenzo from './pages/TestPageRenzo/TestPageRenzo'
import GameCardDemo from './pages/GameCardDemo/GameCardDemo.jsx'
import TestPageJanis from './pages/TestPageJanis/TestPageJanis.jsx'
import TestPageMarc from './pages/TestPageMarc/TestPageMarc.jsx'
import Account from './pages/Account/Account.jsx'

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
    {
      element: <CarouselDemo />,
      path: '/carouselDemo'
    },
    {
      element: <GameCardDemo />,
      path: '/gameCardDemo'
    },
    {
      element: <TestPageJanis />,
      path: '/testpagejanis/:id'
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
      element: <ProductDetails />,
      path: '/productdetails/:id'
    },
  ]);
}

export default AppRouter
