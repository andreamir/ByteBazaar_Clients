import { useRoutes } from 'react-router-dom'
import App from './App'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import CarouselDemo from './pages/CarouselDemo/CarouselDemo.jsx'
import TestPageRenzo from './pages/TestPageRenzo/TestPageRenzo'

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
      element: <ProductDetail />,
      path: '/product/:id'
    },
    {
      element: <CarouselDemo />,
      path: '/carouselDemo'
    }
  ]);
}

export default AppRouter